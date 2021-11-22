---
title: Store Manual Documentation
date: 2021-09-08 09:40:12
---

# Super Admin Manual

## Getting started

To access all features on anne, you have be a super role user. Only a super user can create another super user or upgrade to super user.
Super user can access all the major modules like stores.

## User Management

There are multiple types of users on the system. All users get access to different modules based on the permission given by their role they belong. Only the super admin has control over the website settings.

> Info! You can not access or modify users who have more privilege than you. You can only create users with less privilege than yourself.

### Users

- Super admin can only access user management.
- Users listing page, super admin can see all the users and search for specfic user. Super admin can enable or diable any user access on website.
- A user must have a role to get access to this system.

We have four types of user roles

1. User
2. Vendor
3. Admin
4. Super

![Image](./anne/users.png)

- Super admin can assign store to users, and change role of user. Super admin can edit other details also.

  ![Image](./anne/user.png)

## Catalog

### Colors

In the color section there are the colors of the different product that are available in the store can be seen.
Color used for better navigation in product for customer.

- In sidebar, go to Products → Colors.

**Create new Color**

- Click on plus icon for create new color.
- Now you can fill form of color.
- Color Code is a unique code, duplicate color code not allowed.
- Click on save icon at right side of bottom.

![Image](./anne/color.png)

**Colors List**

- You can edit,clone and delete color from here.

![Image](./anne/colors.png)

**Color Export**

- You can export all yours colors in the csv format by going to the manage colors page where the colors grid is displayed. On the right corner of the grid there is an excel logo from where the you can export the csv which will have grid columns.

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
8. Referr User

![Image](./anne/email-templates-super1.png)

Only super admin can edit these customer templates. And also able to enable and disable.

![Image](./anne/email-templates-super2.png)

### Store Settings

**Store Profile**

Super admin can add global currency from here.

![Image](./anne/store-setting1.png)

**SMS and Email**

In sms and email section, Super admin can enable otp based login. Super admin can choose sms provider. Super admin can also enable or disable email services.

![Image](./anne/store-setting2.png)

**Images**

Super admin can add cdn url for website images, so it can be load faster. Super admin can also upload logo's from here.

![Image](./anne/store-setting3.png)

**Tracking and Analytics**

Super admin can see the list of all GDPR Data Deletion Requests. And Super admin can confirm GDPR Data Deletion Request.

![Image](./anne/store-setting4.png)

### Stores

- In sidebar, go to Settings → Stores.
- Here super admin can see list of all stores.

![Image](./anne/stores.png)

- Super admin can edit any store from here, also disable them from here.

![Image](./anne/store.png)

### Units

In this section, you can set measurement units and data formats and some platform rules that will be used to control the marketplace.

In the unit section there are the units of the different product that are available in the store can be seen.
Unit used for better navigation in product for customer.

- In sidebar, go to Products → Units.

**Create new Unit**

- Click on plus icon for create new unit.
- Now you can fill form of unit.
- Unit Code is a unique code, duplicate unit code not allowed.
- Click on save icon at right side of bottom.

![Image](./anne/unit.png)

**Units List**

- You can edit,clone and delete unit from here.

![Image](./anne/units.png)

**Unit Export**

- You can export all yours units in the csv format by going to the manage units page where the units grid is displayed. On the right corner of the grid there is an excel logo from where the you can export the csv which will have grid columns.

![Image](./anne/excel-and-search.png)

### Sync

In this section, you will sync images with the server, sync auto complete, and sync with es etc.

> Note - while uploading image, restricted platfrom url not allowed, like google dive and dropbox

- In sidebar , go to Settings → Sync.

![Image](./anne/sync.png)

<!-- ## Manage Vendors

A vendor can register on the merchant landing page and you don’t have to do anything at all. Sometime you may want to add a vendor from the back office and you can do that! To create a new vendor, you just have to provide some basic information and the system will send an email with instructions to the vendor to complete the registration process. Of course, you have full control to manage vendors from your admin panel.

You can offer a trial period with your subscription plans and also can set if a vendor needs to add a card on the time of registration. Read this article to manage subscription plans.

### Vendor Approval

If you set the VENDOR NEEDS APPROVALS on at SETTINGS CONFIGURATION section, then every vendor will require manual approval from admin/platform to get live.

The sysmol means the vendor is active and the sysmol means need approval. You can click over the symbol to activate or deactivate the vendor. Also you can use the symbol on the option panel to do the exact same.

### Vendor Verification

This is one of the most requested features from the customers. This feature will help your marketplace to prevent fraud and gain trust from buyers. A shiny verified badge will be displayed on the side of vendor name on the marketplace, so the customers will know which vendors are verified.

Vendors can upload the required documents from the profile page and admin will see the request on the dashboard.

When a vendor uploads documents to verify you’ll see the PENDING VERIFICATIONS box with the number of requests.

Click over the symbol to download the document and do manual inspection. After you’re satisfied with the submitted documents you need to click over the VERIFY button to complete the action. After you’ve done you can also delete the file using the button to keep your system clean. -->

<!-- #### Edit Customers

You can change an existing customer profile to update their information.

**To edit a customer’s information**

- In sidebar, go to Customers.
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
