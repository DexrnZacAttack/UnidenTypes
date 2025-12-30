# uniden-types (unofficial)

TypeScript types for various Uniden scanner protocols

> [!IMPORTANT]
> All types found in this project have been reverse engineered based on what response any given scanner has returned to
> my command requests, with info obtained from the documentation referenced in the Credits section.
>
> These types have been modified to mostly match what it ideally should look like if the objects were in JSON form,
> instead of XML/Text  
> To get much use out of them, you'll need to parse the responses into these types.
>
> Aside from that, most names and types have largely been left untouched, so you may see inconsistent field namings and
> improper types: e.g. `VOL: string; // scanner volume` (should be number)
>
> I do not guarantee the types nor the documentation (code comments, markdown files, etc.) will be 100% accurate.
> I also do not guarantee that the types contained within will be complete.

## Credits

[SDS Series Remote Command Specification v2.00 (Uniden.com)](https://info.uniden.com/twiki/pub/UnidenMan4/SDS100FirmwareUpdate/SDS_Series_RemoteCommand_Specification_V2_00.pdf)   
[BCD996P2 Remote Protocol Specification v1.03 (Uniden.com)](https://info.uniden.com/twiki/pub/UnidenMan4/BCD996P2/BCD996P2_Remote_Protocol_ver_1_03.pdf)

## Disclaimer

This project is not in any way associated with Uniden, and information collected for this project was obtained from both
reverse engineered types & publicly accessible pages. (pages cited in the Credits section)

If anyone from Uniden requires this project be taken down, please contact me.

- Discord: `dexrn` (ideal)
- Email: `me@dexrn.me`