# Medium Paywall Remover

This is a Chrome extension(well, it works on Chromium based browsers) that removes the annoying member only 
content paywall on Medium.
It works by concatenating 12ft.io proxy link to the original link, intercepting the click event and redirecting
to the proxy link. The proxy link is a free service that bypasses the paywall. 

## Features
- Automatically adds 12ft.io to Medium article links. Just click on what you want to read and everything else is taken care of.
- Redirects you to the 12ft.io URL when you click on a modified link, providing a seamless experience.

## Installation
- Clone this repo
- Open Chrome and go to `chrome://extensions/`
- Enable developer mode
- Click on `Load unpacked` and select the cloned repo folder
- You're done! Now go to any Medium article and enjoy!

## Usage
Once the extension is installed, you can just click on any Medium article link and it will automatically redirect you to the 12ft.io proxy link.

## Contributing
Pull requests are welcome. Let's make this better together! If you have any ideas,
bug reports or feature requests, please open an issue or submit a pull request.


## License
[MIT](https://choosealicense.com/licenses/mit/)