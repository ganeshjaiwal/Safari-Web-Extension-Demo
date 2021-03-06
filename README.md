# Safari-Web-Extension-Demo
This is the demo extension to represent new safari web extension support

1. Clone repo
2. Open project with Xcode
3. To develop without a certificate, each time Safari is launched, you must tell it to load unsigned extensions using the Develop menu:
   - Open Safari and choose Safari > Preferences.
   - Select the Advanced tab, then select the “Show Develop menu in menu bar” checkbox.
   - Choose Develop > Allow Unsigned Extensions. The Allow Unsigned Extensions setting is reset when a user quits Safari; you must set it again the next time Safari is launched.
   - Select the Extensions tab. This tab shows the localized description, display name, and version number for the selected Safari App Extension. It also provides a more nuanced message about the permissions claimed by the extension.
   - Find your new extension in the list on the left, and enable it by selecting the checkbox.
   - Close Safari Preferences.

[Refer Apple Developer Documentation](https://developer.apple.com/documentation/safariservices/safari_app_extensions/building_a_safari_app_extension#2957926)
