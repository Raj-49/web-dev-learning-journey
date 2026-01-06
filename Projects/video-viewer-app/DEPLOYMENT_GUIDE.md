# 🚀 DigitalOcean Deployment Guide

Complete step-by-step guide to deploy the MERN Video Viewer application on DigitalOcean with a subdomain.

---

## 📋 Prerequisites

- DigitalOcean account (sign up at https://www.digitalocean.com)
- A domain name (e.g., from Namecheap, GoDaddy, or DigitalOcean)
- Basic terminal/SSH knowledge
- Your application files ready

---

## 🎯 Deployment Steps

### **Step 1: Create a DigitalOcean Droplet**

1. **Login to DigitalOcean**

   - Go to https://cloud.digitalocean.com
   - Click on "Create" → "Droplets"
2. **Choose Droplet Configuration**

   - **Image**: Ubuntu 22.04 (LTS) x64
   - **Plan**: Basic
   - **CPU Options**: Regular (Shared CPU)
   - **Size**: $6/month (1GB RAM, 1 vCPU, 25GB SSD) - Perfect for this app
   - **Datacenter Region**: Choose closest to your location
   - **Authentication**:
     - Choose "SSH keys" (recommended) OR
     - Choose "Password" (easier for beginners)
   - **Hostname**: `mern-videos` (or any name you prefer)
   - Click **"Create Droplet"**
3. **Note Your Droplet IP Address**

   - Once created, note the IP address (e.g., `123.45.67.89`)
   - This will be shown in your droplet dashboard

---

### **Step 2: Connect to Your Droplet via SSH**

#### **Windows (Using PowerShell)**

```powershell
ssh root@YOUR_DROPLET_IP
# Example: ssh root@123.45.67.89
```

#### **First Time Connection**

- Type `yes` when asked about authenticity
- Enter password if you chose password authentication

---

### **Step 3: Update System and Install Required Software**

Once connected via SSH, run these commands:

```bash
# Update package list
sudo apt update

# Upgrade installed packages
sudo apt upgrade -y

# Install Nginx (web server)
sudo apt install nginx -y

# Check if Nginx is running
sudo systemctl status nginx
```

You should see Nginx is "active (running)". Press `q` to exit.

---

### **Step 4: Configure Firewall**

```bash
# Allow SSH (important - don't skip!)
sudo ufw allow OpenSSH

# Allow Nginx HTTP
sudo ufw allow 'Nginx HTTP'

# Allow Nginx HTTPS (for SSL later)
sudo ufw allow 'Nginx HTTPS'

# Enable firewall
sudo ufw enable

# Type 'y' when prompted

# Check firewall status
sudo ufw status
```

---

### **Step 5: Create Directory for Your Application**

```bash
# Create web directory
sudo mkdir -p /var/www/mern-videos

# Set permissions
sudo chown -R $USER:$USER /var/www/mern-videos

# Navigate to directory
cd /var/www/mern-videos
```

---

### **Step 6: Upload Your Application Files**

You have **3 options** to upload files:

#### **Option A: Using SCP from Your Local Machine (Recommended)**

Open a **NEW PowerShell window** on your local machine (don't close SSH):

```powershell
# Navigate to your app folder
cd "c:\_SystemInventory\05_Internship\2026_Winter_Internship\Brainlybeans\Excel shit Task\Videos\video-viewer-app"

# Upload all files to droplet
scp -r * root@YOUR_DROPLET_IP:/var/www/mern-videos/

# Example: scp -r * root@123.45.67.89:/var/www/mern-videos/
```

Enter your password when prompted.

#### **Option B: Using FileZilla (GUI Method)**

1. Download FileZilla from https://filezilla-project.org
2. Install and open FileZilla
3. Connect:
   - Host: `sftp://YOUR_DROPLET_IP`
   - Username: `root`
   - Password: Your droplet password
   - Port: `22`
4. Navigate to `/var/www/mern-videos` on remote side
5. Drag and drop all files from local to remote

#### **Option C: Using Git (If files are on GitHub)**

```bash
# On your droplet SSH session
cd /var/www/mern-videos

# Install git
sudo apt install git -y

# Clone your repository
git clone YOUR_GITHUB_REPO_URL .
```

---

### **Step 7: Configure Nginx**

Back in your **SSH session**:

```bash
# Create Nginx configuration file
sudo nano /etc/nginx/sites-available/mern-videos
```

Paste this configuration (use **Ctrl+Shift+V** to paste in SSH):

```nginx
server {
    listen 80;
    listen [::]:80;

    # Replace with your domain/subdomain
    server_name videos.yourdomain.com;

    root /var/www/mern-videos;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    # Cache static files
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

**Important**: Replace `videos.yourdomain.com` with your actual subdomain!

Save and exit:

- Press `Ctrl + O` (write out)
- Press `Enter` (confirm)
- Press `Ctrl + X` (exit)

---

### **Step 8: Enable the Nginx Configuration**

```bash
# Create symbolic link to enable site
sudo ln -s /etc/nginx/sites-available/mern-videos /etc/nginx/sites-enabled/

# Remove default site (optional)
sudo rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# If test successful, reload Nginx
sudo systemctl reload nginx
```

---

### **Step 9: Set Up Domain/Subdomain**

#### **Option A: Using DigitalOcean DNS (Recommended)**

1. **Add Domain to DigitalOcean**

   - Go to DigitalOcean Dashboard → "Networking" → "Domains"
   - Click "Add Domain"
   - Enter your domain (e.g., `yourdomain.com`)
   - Click "Add Domain"
2. **Update Nameservers at Your Domain Registrar**

   Go to your domain registrar (Namecheap, GoDaddy, etc.) and update nameservers to:

   ```
   ns1.digitalocean.com
   ns2.digitalocean.com
   ns3.digitalocean.com
   ```
3. **Create DNS Records**

   In DigitalOcean DNS settings:

   - **For Subdomain**:

     - Type: `A`
     - Hostname: `videos` (or any subdomain name)
     - Will Direct to: Select your droplet
     - TTL: 3600
     - Click "Create Record"
   - **For Root Domain** (optional):

     - Type: `A`
     - Hostname: `@`
     - Will Direct to: Select your droplet
     - TTL: 3600

   Your subdomain will be: `videos.yourdomain.com`

#### **Option B: Using Your Current Domain Registrar**

If you don't want to change nameservers:

1. Go to your domain registrar's DNS settings
2. Add an **A Record**:
   - Type: `A`
   - Name/Host: `videos`
   - Value/Points to: `YOUR_DROPLET_IP`
   - TTL: 3600 or Auto

**Wait 5-60 minutes** for DNS propagation.

---

### **Step 10: Test Your Website**

```bash
# Check if files exist
ls -la /var/www/mern-videos

# You should see: index.html, styles.css, app.js, videoData.js
```

Visit your subdomain in browser:

- `http://videos.yourdomain.com`

If you see your website, congratulations! 🎉

---

### **Step 11: Install SSL Certificate (HTTPS) - FREE with Let's Encrypt**

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtain and install SSL certificate
sudo certbot --nginx -d videos.yourdomain.com

# Follow prompts:
# - Enter email address
# - Agree to terms (type 'Y')
# - Optional: Share email (type 'Y' or 'N')
# - Redirect HTTP to HTTPS (choose 2)
```

**Test auto-renewal**:

```bash
sudo certbot renew --dry-run
```

Now visit: `https://videos.yourdomain.com` 🔒

---

### **Step 12: Set Up Auto-Renewal for SSL**

```bash
# Certbot auto-renewal is set up automatically
# Test it with:
sudo systemctl status certbot.timer
```

---

## 🎨 Quick Reference Commands

### **Update Application Files**

When you make changes to your app:

```bash
# On your local machine
scp -r * root@YOUR_DROPLET_IP:/var/www/mern-videos/

# No need to restart Nginx for static files
```

### **Restart Nginx**

```bash
sudo systemctl restart nginx
```

### **View Nginx Error Logs**

```bash
sudo tail -f /var/nginx/error.log
```

### **Check Droplet Resources**

```bash
# Memory usage
free -h

# Disk usage
df -h

# CPU usage
top
# Press 'q' to exit
```

---

## 🔒 Security Best Practices

### **1. Create Non-Root User**

```bash
# Create new user
adduser deployer

# Add to sudo group
usermod -aG sudo deployer

# Switch to new user
su - deployer
```

Use this user instead of root for daily operations.

### **2. Disable Root Login (Optional but Recommended)**

```bash
sudo nano /etc/ssh/sshd_config

# Find and change:
PermitRootLogin no

# Save and restart SSH
sudo systemctl restart sshd
```

### **3. Set Up Automatic Security Updates**

```bash
sudo apt install unattended-upgrades -y
sudo dpkg-reconfigure --priority=low unattended-upgrades
```

---

## 📊 Monitoring and Maintenance

### **Install and Configure Nginx Status Page**

```bash
# Edit Nginx config
sudo nano /etc/nginx/sites-available/mern-videos

# Add this inside server block:
location /nginx_status {
    stub_status on;
    access_log off;
    allow 127.0.0.1;
    deny all;
}

# Reload Nginx
sudo systemctl reload nginx

# Check status
curl http://localhost/nginx_status
```

---

## 🆘 Troubleshooting

### **Website Not Loading**

1. Check if Nginx is running:

   ```bash
   sudo systemctl status nginx
   ```
2. Check Nginx configuration:

   ```bash
   sudo nginx -t
   ```
3. Check firewall:

   ```bash
   sudo ufw status
   ```
4. Check DNS propagation:

   - Visit: https://dnschecker.org
   - Enter your subdomain

### **Permission Denied Errors**

```bash
sudo chown -R www-data:www-data /var/www/mern-videos
sudo chmod -R 755 /var/www/mern-videos
```

### **502 Bad Gateway**

```bash
# Check Nginx error logs
sudo tail -50 /var/log/nginx/error.log

# Restart Nginx
sudo systemctl restart nginx
```

---

## 💰 Cost Estimate

- **Droplet**: $6/month (can start with $4/month for lighter traffic)
- **Domain**: $10-15/year (if you don't have one)
- **SSL Certificate**: FREE (Let's Encrypt)
- **Total**: ~$6/month + domain cost

---

## 🎯 Alternative: Even Simpler Deployment

If you want something even simpler:

### **Deploy on Netlify (FREE)**

1. Create account at https://netlify.com
2. Drag and drop your folder
3. Done! Auto HTTPS and free subdomain

### **Deploy on GitHub Pages (FREE)**

1. Create GitHub repo
2. Upload files
3. Enable GitHub Pages in settings
4. Access at `username.github.io/repo-name`

### **Deploy on Vercel (FREE)**

1. Create account at https://vercel.com
2. Import your GitHub repo
3. Automatic deployment

---

## 📚 Additional Resources

- DigitalOcean Tutorials: https://www.digitalocean.com/community/tutorials
- Nginx Documentation: https://nginx.org/en/docs/
- Let's Encrypt: https://letsencrypt.org/
- DNS Checker: https://dnschecker.org/

---

## ✅ Deployment Checklist

- [ ] Create DigitalOcean droplet
- [ ] Connect via SSH
- [ ] Install Nginx
- [ ] Configure firewall
- [ ] Upload application files
- [ ] Configure Nginx for your app
- [ ] Set up domain/subdomain DNS
- [ ] Test website (HTTP)
- [ ] Install SSL certificate (HTTPS)
- [ ] Test auto-renewal
- [ ] Set up monitoring (optional)
- [ ] Create non-root user (recommended)

---

## 🎉 You're Live!

Your MERN video viewer is now:

- ✅ Deployed on DigitalOcean
- ✅ Accessible via custom subdomain
- ✅ Secured with HTTPS
- ✅ Ready for the world!

**Your live URL**: `https://videos.yourdomain.com`

---

## 🌐 Real-World Deployment Example

### **Actual Deployment Implementation**

This application was successfully deployed using the following setup:

#### **1. DigitalOcean Droplet Setup**

- **Droplet Name**: `mern-videos`
- **OS**: Ubuntu 22.04 LTS
- **Plan**: Basic - $6/month (1GB RAM, 1 vCPU, 25GB SSD)
- **Datacenter**: Selected based on geographical location
- **IP Address**: Assigned by DigitalOcean (e.g., `143.198.x.x`)

#### **2. Domain Purchase & Configuration**

**Domain Provider**: Hostinger

1. **Purchased Domain**: `rajpatel.fun`
   - Cost: ~$1-2/year (Hostinger promotional pricing)
   - Registered through: https://www.hostinger.com

2. **DNS Configuration at Hostinger**:
   
   Navigate to: Hostinger Dashboard → Domains → DNS / Name Servers → DNS Records

   **Added A Record for Subdomain**:
   ```
   Type:     A
   Name:     video
   Points to: YOUR_DROPLET_IP (e.g., 143.198.x.x)
   TTL:      14400 (or Auto)
   ```

   This creates the subdomain: `video.rajpatel.fun` → Points to DigitalOcean droplet

3. **DNS Propagation**:
   - Wait time: 5-60 minutes (typically 10-15 minutes)
   - Check propagation at: https://dnschecker.org

#### **3. Nginx Configuration on Droplet**

Updated `/etc/nginx/sites-available/mern-videos`:

```nginx
server {
    listen 80;
    listen [::]:80;

    server_name video.rajpatel.fun;

    root /var/www/mern-videos;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

Commands executed:
```bash
sudo nano /etc/nginx/sites-available/mern-videos
sudo nginx -t
sudo systemctl reload nginx
```

#### **4. SSL Certificate Installation**

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtain SSL certificate for subdomain
sudo certbot --nginx -d video.rajpatel.fun
```

Certbot automatically:
- Obtained SSL certificate from Let's Encrypt
- Updated Nginx configuration with SSL settings
- Set up auto-renewal (certificate valid for 90 days, auto-renews)

#### **5. Final Deployment URLs**

- **HTTP**: `http://video.rajpatel.fun` (auto-redirects to HTTPS)
- **HTTPS**: `https://video.rajpatel.fun` ✅ (Secure, with SSL certificate)

#### **6. Deployment Workflow Summary**

```
Local Development
    ↓
Upload files via SCP/FileZilla to DigitalOcean
    ↓
Configure Nginx to serve files
    ↓
Purchase domain (rajpatel.fun) from Hostinger
    ↓
Add A record (video.rajpatel.fun → Droplet IP)
    ↓
Install SSL certificate with Certbot
    ↓
✅ Live at https://video.rajpatel.fun
```

### **Key Takeaways from This Deployment**

1. **Hostinger** is a cost-effective domain provider (especially for .fun domains)
2. **A Records** point domain/subdomain to server IP addresses
3. **Certbot** makes SSL setup incredibly easy (literally 1 command)
4. **DNS propagation** is usually fast (10-30 minutes)
5. Total cost: ~$6/month (droplet) + ~$1-2/year (domain) = Very affordable!

### **Alternative Domain Providers for Similar Setup**

- **Namecheap**: ~$10-15/year for .com domains
- **GoDaddy**: ~$12-20/year for .com domains  
- **Cloudflare**: Free DNS management + optional domain registration
- **Porkbun**: Budget-friendly alternative (~$8-10/year)

---

**Need Help?**

- DigitalOcean Community: https://www.digitalocean.com/community
- Hostinger Support: https://www.hostinger.com/support
- Ask on Stack Overflow with tag `digitalocean`

**Last Updated**: January 5, 2026
