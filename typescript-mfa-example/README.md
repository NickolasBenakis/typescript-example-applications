# TypeScript Example App with MFA powered by WorkOS
An example TypeScript application demonstrating how to use the [WorkOS MFA API](https://workos.com/docs/mfa/guide) using the [Node SDK](https://github.com/workos/workos-node) to authenticate users.

## Prerequisites
-Node.js version 10+

## TypeScript Project Setup

1. Clone the main repo and install dependencies for the app you'd like to use:
    ```bash
    # HTTPS
    git clone https://github.com/workos/typescript-example-applications.git
    ```
    or

    ```bash
    # SSH
    git clone git@github.com:workos/typescript-example-applications.git
    ```

2. Navigate to MFA app within the cloned repo. 
   ```bash
   $ cd typescript-example-applications/typescript-mfa-example
   ```

3. Install the dependencies. 
    ```bash
    $ npm install
    ```

## Configure your environment

4. Grab your API Key and Client ID from the WorkOS Dashboard. Create a `.env`
file at the root of the project, and store these like so:
    ```
    WORKOS_API_KEY=sk_xxxxxxxxxxxxx
    PORT=3000
    ```

5. The final setup step is to start the server.
   ```bash
   $ npm run dev
   ```

   Navigate to `localhost:3000` in your web browser. 

## Using the MFA application

This application is meant to showcase the MFA API and how to interact with it using the WorkOS Node SDK. It is not meant to show a real-life example of how MFA should be implemented. 

   The app supports two types of MFA flows, SMS and Time-based One Time Password (TOTP). 

   SMS: The SMS flow requires you to send a code via text message. You can customize this message, but the message must include the string "{{code}}". This string of characters tells the WorkOS API to generate a random code that will be populated automatically. If "{{code}}" is not included in the message, the authentication cannot be completed. 

   TOTP: This type of authentication requires the use of a 3rd party authentication app (1Password, Authy, Google Authenticator, Microsoft Authenticator, Duo, etc). Scan the QR code from the Factor Details page to create the corresponding factor in the 3rd party app, then enter the time-based password when prompted in this MFA application.  

   
## Need help?

First, make sure to reference the MFA docs at https://workos.com/docs/mfa/guide. 

If you get stuck and aren't able to resolve the issue by reading our API reference or tutorials, you can reach out to us at support@workos.com and we'll lend a hand.
