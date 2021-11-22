---
title: Store Manual Documentation
date: 2021-09-08 09:40:12
---

# Super Admin Manual

## Getting started

To access all features on Anne, you have to be a super role user. Only a super user can create another super user or upgrade to a super user.
Super user can access major modules like stores.

## User Management

There are multiple types of users on the system. All users get access to different modules based on the permission given by the role they belong to. Only the super admin has control over the website settings.

> Info! You can not access or modify users who have more privilege than you. You can only create users with less privilege than yourself.

### Users

- Super admin can only access user management.
- Users listing page, super admin can see all users and search for a specific user. Super admin can enable or disable any user access on the website.
- A user must have a role to get access to this system.

We have four types of user roles

1. User
2. Vendor
3. Admin
4. Super

![Image](./anne/users.png)

- Super admin can assign the store to users, and change the role of the user. Super admin can edit other details also.

  ![Image](./anne/user.png)

## Catalog

### Colors

In the color section, there are the colors of the different products that are available in the store can be seen.
Color used for better navigation in product for a customer.

- In the sidebar, go to Products → Colors.

**Create new Color**

- Click on the plus icon to create a new color.
- Now you can fill the form of color.
- Color Code is a unique code, duplicate color code is not allowed.
- Click on the save icon on the right side of the bottom.

![Image](./anne/color.png)

**Colors List**

- You can edit, clone, and delete color from here.

![Image](./anne/colors.png)

**Color Export**

- You can export all your colors in the CSV format by going to the manage colors page where the colors grid is displayed. On the right corner of the grid, there is an excel logo from where you can export the CSV which will have grid columns.

![Image](./anne/excel-and-search.png)

## Configurations

### Global Email Template

An email template is an HTML file composed of reusable code modules, making it as easy as copying and pasting your copy, links, and image URLs to create an email.

Email templates for global as follows

1. Subscription Activation
2. Store Verification
3. Verify Email
4. Change Password
5. Reset Password
6. Forgot Password
7. Sign Up
8. Refer User

![Image](./anne/email-templates-super1.png)

Only super admin can edit these customer templates. And also able to enable and disable.

![Image](./anne/email-templates-super2.png)

### Store Settings

**Store Profile**

Super admin can add global currency from here.

![Image](./anne/store-setting1.png)

**SMS and Email**

In the SMS and email section, the Super admin can enable OTP-based login. Super admin can choose SMS provider. Super admin can also enable or disable email services.

![Image](./anne/store-setting2.png)

**Images**

Super admin can add CDN URL for website images, so it can be loaded faster. Super admin can also upload logos from here.

![Image](./anne/store-setting3.png)

**Tracking and Analytics**

Super admin can see the list of all GDPR Data Deletion Requests. And Super admin can confirm GDPR Data Deletion Request.

![Image](./anne/store-setting4.png)

### Stores

- In the sidebar, go to Settings → Stores.
- Here super admin can see a list of all stores.

![Image](./anne/stores.png)

- Super admin can edit any store from here, also disable them from here.

![Image](./anne/store.png)

### Units

In this section, you can set measurement units and data formats and some platform rules that will be used to control the marketplace.

In the unit section, there are the units of the different products that are available in the store can be seen.
A unit used for better navigation in product for a customer.

- In the sidebar, go to Products → Units.

**Create new Unit**

- Click on the plus icon to create a new unit.
- Now you can fill the form of unit.
- Unit Code is a unique code, duplicate unit code is not allowed.
- Click on the save icon on the right side of the bottom.

![Image](./anne/unit.png)

**Units List**

- You can edit, clone, and delete the unit from here.

![Image](./anne/units.png)

**Unit Export**

- You can export all your units in the CSV format by going to the manage units page where the units grid is displayed. On the right corner of the grid, there is an excel logo from where you can export the CSV which will have grid columns.

![Image](./anne/excel-and-search.png)

### Sync

In this section, you will sync images with the server, sync auto-complete, and sync with elastic search, etc.

> Note - while uploading an image, restricted platform URL not allowed, like google drive and dropbox

- In the sidebar, go to Settings → Sync.

![Image](./anne/sync.png)

<!-- ## Manage Vendors

A vendor can register on the merchant landing page and you don’t have to do anything at all. Sometimes you may want to add a vendor from the back office and you can do that! To create a new vendor, you just have to provide some basic information and the system will send an email with instructions to the vendor to complete the registration process. Of course, you have full control to manage vendors from your admin panel.

You can offer a trial period with your subscription plans and also can set if a vendor needs to add a card at the time of registration. Read this article to manage subscription plans.

### Vendor Approval

If you set the VENDOR NEEDS APPROVALS on at the SETTINGS CONFIGURATION section, then every vendor will require manual approval from the admin/platform to get live.

The symbol means the vendor is active and the symbol means need approval. You can click over the symbol to activate or deactivate the vendor. Also, you can use the symbol on the options panel to do the same.

### Vendor Verification

This is one of the most requested features from the customers. This feature will help your marketplace to prevent fraud and gain trust from buyers. A shiny verified badge will be displayed on the side of the vendor name on the marketplace, so the customers will know which vendors are verified.

Vendors can upload the required documents from the profile page and the admin will see the request on the dashboard.

When a vendor uploads documents to verify you’ll see the PENDING VERIFICATIONS box with the number of requests.

Click over the symbol to download the document and do the manual inspection. After you’re satisfied with the submitted documents you need to click over the VERIFY button to complete the action. After you’ve done you can also delete the file using the button to keep your system clean. -->

<!-- #### Edit Customers

You can change an existing customer profile to update their information.

**To edit a customer’s information**

- In the sidebar, go to Customers.
- Click the pencil icon of the customer profile you want to edit.
- In the Edit customer dialog, you can change a customer’s

  - firstName and lastName
  - email address
  - Shipping Charges(in role vendor)
  - Free Shipping On(in role vendor)
  - Role
  - active and verified
    Click Save to confirm your changes

![Image](./anne/customer-edit.png) -->
