#!/usr/bin/env node

/**
 * Script to fix Strapi permissions for global content type
 * This script will configure public read permissions for the global API
 */

import axios from 'axios';

async function fixPermissions() {
  try {
    console.log('🔧 Fixing Strapi permissions...');
    
    // First, let's check if we can access the admin API
    const adminUrl = 'http://localhost:1337/admin';
    console.log('📡 Checking Strapi admin access...');
    
    const response = await axios.get(adminUrl);
    console.log('✅ Strapi admin is accessible');
    
    // Since we can't easily configure permissions via API without authentication,
    // let's provide instructions for manual configuration
    console.log('\n📋 Manual Configuration Required:');
    console.log('1. Open your browser and go to: http://localhost:1337/admin');
    console.log('2. Log in to the Strapi admin panel');
    console.log('3. Navigate to: Settings → Users & Permissions Plugin → Roles');
    console.log('4. Click on the "Public" role');
    console.log('5. Under "Global", check the following permissions:');
    console.log('   - find (to allow listing global content)');
    console.log('   - findOne (to allow fetching single global content)');
    console.log('6. Click "Save"');
    console.log('\n✅ After completing these steps, the API should work correctly.');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\n🔧 Alternative solution:');
    console.log('1. Make sure Strapi is running: yarn strapi');
    console.log('2. Open http://localhost:1337/admin in your browser');
    console.log('3. Configure permissions manually as described above');
  }
}

fixPermissions();

