import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IFilme } from '../models/IFilme.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Videos App';

  listaVideos: IFilme[]= [
    {
    nome: 'Venom: Tempo de Carnificina (2021)',
    lancamentos: '07/10/2021',
    duracao: '1h 37m ',
classificacao:72,
cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h5UzYZquMwO9FVn15R2eK2itmHu.jpg',
generos: ['Ficção científica', 'Ação', 'Aventura']
    },
    {
      nome:'Alerta Vermelho (2021)',
      lancamentos:'05/11/2021',
      duracao: '1h 48m',
      classificacao: 72,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pe17f8VDfzbvbHSAKAlcORtBHmW.jpg',
      generos:['Ação', 'Comédia', 'Crime', 'Thriller']
    }
  ];

  constructor(public alertController: AlertController, public toastController: ToastController) {}



  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'deseja realmente favoritar o filme',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, favoritar!',
          handler: () => {
            this.apresentartoast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentartoast() {
    const toast = await this.toastController.create({
      message: 'o filme foi adicionado aos favoritos!',
      duration: 2000,
      color: 'primary'
    });
    toast.present();
  }

}
