import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre  :String;
  apellido:String;
  correo  :String;
  mensaje  :String;

  constructor(private alertController : AlertController,
              private toastController : ToastController) {}

  ngOnInit() {
  }
  async grabar(nom: HTMLInputElement, ape: HTMLInputElement, correo: HTMLInputElement)
  {
    if(nom.value == ""){
      this.mensaje = "falta el nombre"
    }
    else if(ape.value == "")
    {
      this.mensaje = "Falta apellido"
    }
    else if(ape.value == "")
    {
      this.correo = "Falta correo"
    }
    else if(ape.value == "")
    {
      this.mensaje = "";
      const alert = await this.alertController.create({
        header : "mensaje de la app",
        subHeader : "datos ingresados",
        message : "los datos fueron guardados con exito",
        buttons : ['OK'],

      });
      await alert.present();
    }
  }
  limpiar()
  {

  }
}
