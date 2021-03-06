import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'chey',
            description: 'Displays info about chey.',
            category: 'general',
            usage: `${client.config.prefix}chey`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://www.linkpicture.com/q/50554-Satoru-Gojo-White-Hair-Blue-Eyes-School-UniformSatoru.jpg'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `Hey I'm CHEY, a learner/student & an upcoming developer in the future.
            
đ«đđđđ©đšđŒđ„đ„;
Wa.me/918373017400

â­đđđ©đđȘđ;
https://github.com/Chey-san

đźđđŁđšđ©đđđ§đđą;
https://instagram.com/its_chey_7

đđżđđšđđ€đ§đ;
ïœđąđđđđđ đČđđđïœ 

âȘŒđČđŸđŸ đđșđđâš` }
        )
    }
}
