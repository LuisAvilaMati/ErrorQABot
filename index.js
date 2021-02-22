const Discord = require('discord.js');
const client = new Discord.Client();
const { GoogleSpreadsheet } = require('google-spreadsheet');
const credenciales  = require('./credenciales.json');

let googleid = process.env.googleid;
var nombre;
var motivo;
var dia;
/*async function accederGoogleSheet(nombre,motivo,dia){
  const documento = new GoogleSpreadsheet(process.env.googleid);
  await documento.useServiceAccountAuth(credenciales);
  await documento.loadInfo();
  const sheet = documento.sheetsByIndex[0];
  const larryRow = await sheet.addRow({ Name: nombre, Motivo: motivo, Dia:dia});
}
*/
client.on('ready', () => {
    console.log("Bot is ready");
});

client.on('message', message => {
  if(message.content === 'error!'){
    let counter = 0;
    message.channel.send('Nombre del agente:');
    let filter = m => !m.author.bot;
    let collector =  new Discord.MessageCollector(message.channel, filter);
    collector.on('collect', (message, col)=>{
      console.log("collected message:" + message.content);
      counter ++;
      if (counter === 1) {
        message.channel.send('Correo del agente:');
         nombreAgente = message.content;
      }else if (counter === 2) {
          message.channel.send('Tipo de trabajo: [DR, TM, LV, AD]');
         correoAgente = message.content;
      }else if (counter === 3) {
          message.channel.send('Tipo de documento: [PS, NI, DL, PoR, LV]');
         tipoDeTrabajo = message.content;
      }else if (counter === 4) {
          message.channel.send('Tipo de documento: Tipo de error: [TYPO, CROPPED, MISSING DATA, FALSE REJECTION, FALSE ACCEPTANCE, OTHER]');
         tipoDeDocumento = message.content;
      }else if (counter === 5) {
          message.channel.send('Campo si es DR: "No = null"');
         tipoDeError = message.content;
      }else if (counter === 6) {
          message.channel.send('Pais:');
         campoDR = message.content;
      }else if (counter === 7) {
          message.channel.send('Imagen 1:');
         pais = message.content;
      }else if (counter === 8) {
          message.channel.send('Imagen 2:');
         imagen1 = message.content;
      }else if (counter === 9) {
          message.channel.send('Comentarios:');
         imagen2 = message.content;
      }else if (counter === 10) {
          message.channel.send(`eso es todo mi ${message.author}`);
         comentario = message.content;
         collector.stop();
      }
    });
    collector.on('end', collected =>{
      console.log('recolectados');
      client.users.fetch('243606590500896769').then((user) =>{
        user.send(comentario);
      });
    });
  }
});
client.login("ODEzMjczMTMxNjcwMDQ0Njcy.YDM5oA.f5LrrHiTKdFo5gf6VYLgPkwHvYI");
