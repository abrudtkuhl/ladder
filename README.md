ladder
======

Ladder is a Chrome Extension that hoists you you over newspaper paywalls.

Currently hoists you over nytimes.com, washingtonpost.com, desmoinesregister.com

##Installation Instructions##
1. [Right Click and Save](https://raw.github.com/abrudtkuhl/DMRChrome/master/package/DMRChrome.crx) extension file to your computer
2. Click the Chrome Menu icon ![chrome browser toolbar](https://storage.googleapis.com/support-kms-prod/SNP_2696434_en_v1) on the browser toolbar
3. Select Tools > Extensions
4. Locate the extension file on your computer and drag the file onto the Extensions page
5. Review the list of permissions in the dialog that appears. If you would like to proceed, click *Install*

----

##Release Notes##
**v0.5 - Stable Release**
[Download Release](https://github.com/abrudtkuhl/ladder/releases/tag/v0.5)
- site specific CSS files. this was done so the browser will cache it to avoid the "flicker" effect from hiding elements with javascript. each site gets its own so we're not loading unneccessary css rules for each site. site specific files (css/js) will be put in the /sites folder and referenced with matches in the manifest
- cleaned up data.json to remove unncessary elements such as elements. it really now only needs to know what cookies to munch on
- removed dependency of client side JS (hide.js) and global extension css (hide.css)
- general code refactoring
- added support for nytimes.com, washingtonpost.com, desmoinesregister.com

**v0.2 - First Release**
[Download Release](https://github.com/abrudtkuhl/ladder/releases/tag/v0.2)
- localstorage - save data in localstorage for access from background.js and hide.js
- hide.js - hide annoying popups on front end
- version 1.0 of data.json supports Des Moines Register, Washington Post, NYTimes.

**v0.1 - Import from DMRChrome**
Forked from [DMRChrome](https://github.com/abrudtkuhl/DMRChrome)