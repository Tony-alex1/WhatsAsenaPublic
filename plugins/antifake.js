/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsena - Yusuf Usta
*/

const Asena = require('../events');
const Config = require('../config');
const GIVE_ME_USER = "No Fake Numbers!"
const OFF_NOW = "Anti Fake Number is Turned Off"
const ON_NOW = "On Sucess"

    Asena.addCommand({pattern: 'antifake ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === 'true') {

            return;
        }

        await message.client.sendMessage(message.jid,ON_NOW,MessageType.text);

            if (conn.user.jid.startsWith('1')) { // Turkey
                await message.client.groupRemove(message.jid, [message.data.participant]);
            }
            else if (conn.user.jid.startsWith('994')) { // Azerbayjan
                await message.client.groupRemove(message.jid, [message.data.participant]);
            }
            else if (conn.user.jid.startsWith('94')) { // Sri Lanka
                await message.client.groupRemove(message.jid, [message.data.participant]);
            }
            else if (conn.user.jid.startsWith('351')) { // Portugal
                await message.client.groupRemove(message.jid, [message.data.participant]);
            }
            else if (conn.user.jid.startsWith('7')) { // Russia
                await message.client.groupRemove(message.jid, [message.data.participant]);
            }
            else if (conn.user.jid.startsWith('62')) { // Indonesia
                await message.client.groupRemove(message.jid, [message.data.participant]);
            }
            else if (conn.user.jid.startsWith('49')) { // Germany
                await message.client.groupRemove(message.jid, [message.data.participant]);
            }
            else if (conn.user.jid.startsWith('61')) { // Australia 
                await message.client.groupRemove(message.jid, [message.data.participant]);
            }
            else if (conn.user.jid.startsWith('55')) { // Brazil
                await message.client.groupRemove(message.jid, [message.data.participant]);
            }
            else if (conn.user.jid.startsWith('33')) { // France
                await message.client.groupRemove(message.jid, [message.data.participant]);
            }
            else if (conn.user.jid.startsWith('34')) { // Spain
                await message.client.groupRemove(message.jid, [message.data.participant]);
            }
            else if (conn.user.jid.startsWith('44')) { // UK
                await message.client.groupRemove(message.jid, [message.data.participant]);
            }
            else if (conn.user.jid.startsWith('39')) { // Italy 
                await message.client.groupRemove(message.jid, [message.data.participant]);
            }
            else if (conn.user.jid.startsWith('75')) { // Kazakhistan
                await message.client.groupRemove(message.jid, [message.data.participant]);
            }
            else if (conn.user.jid.startsWith('998')) { // Uzbekistan 
                await message.client.groupRemove(message.jid, [message.data.participant]);
            }
            else if (conn.user.jid.startsWith('993')) { // Turkmenistan
                await message.client.groupRemove(message.jid, [message.data.participant]);
            }
            else {
                await message.client.sendMessage(message.jid,GIVE_ME_USER,MessageType.text);
            }

 }
 else {
     if (match[1] === 'false') {
        await message.client.sendMessage(message.jid,OFF_NOW,MessageType.text);
