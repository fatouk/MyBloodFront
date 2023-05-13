import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url='http://localhost:8083';
  alert: any;
  alertAccept: any;
  idAlert: any;
  alertConfirm: any;
  constructor( private http: HttpClient) { }

  setIdAlert(data: any){this.idAlert = data}
  getIdAlert(){return this.idAlert}

//vue
AjoutVue(data: any){
  console.log('Data from service : ', data);
  return this.http.post(this.url+"/Vue/save", data);
}
getVueByDemandeId(demande: any){
  console.log('demande -> ', demande);
  return this.http.post(this.url+"/Vue/VueByDemande/", demande);
}
  //demande//////////////////////////////////////////////////////
  DemandeEtat(etat: boolean){
    console.log('etat',etat );

    return this.http.get(this.url +"/Accepter/ByEtat/"+ etat)
  }
  acceptByetatAndUser(id: any){

    return this.http.get(this.url +"/Accepter/accepterByEtatAndUser/"+id)
  }
 confirmByetatAndUser(id: any){

    return this.http.get(this.url +"/Confirmer/confirmByEtatAndUser/"+id)
  }

  DemandeSang(data: any, ){
    console.log(data);

    return this.http.post(this.url+"/Demande/Ajout/" ,data);
  }
  getAllAction(){
    return this.http.get(this.url+"/Demande/listDemande");
  }
  getAllDemandeByUser(userid: any){
    console.log("dans serv getall");
    return this.http.get(`${this.url+"/Demande/listDemande"}/${userid}`);
  }
  getAllActionNotVue(vue: boolean, user: any){
    return this.http.post(this.url+"/Notification/VueByUser/"+vue, user);
  }
  detailAction(id: any){
    return this.http.get(`${this.url+"/Demande/ById"}/${id}`);
  }
  //utilisateur///////////////////////////////////////////////////
  login(telephone : string, password : String){
    // console.log(telephone);
    return this.http.get(this.url+"/Utilisateur/login/"+telephone+"/"+password);
  }

  AjoutUsers(data: any){
    console.log(data);
    return this.http.post(this.url+"/Utilisateur/Ajout", data);
  }
  deleteUser(id:any, userId:number){
    return this.http.delete(this.url+"/Utilisateur/suprimerUtilisateur/"+id+"&"+userId);
}
getAllUsers(){
  return this.http.get(this.url+"/Utilisateur/listUtilisateur");
}

updateUser(id: any,  data: any){
  return this.http.put(`${this.url+"/Utilisateur/modifierUtilisateur"}/${id}`,data);
}

detailUser(id: any){
  return this.http.get(`${this.url+"/Utilisateur/ById"}/${id}`);
}


//Banque Sang////////////////////////////////////////////////////
getAllbanque(){
  return this.http.get(this.url+"/Banque/listBanque");
}
AjoutBanque(data: any){
  console.log(data);
  return this.http.post(this.url+"/Banque/Ajout", data);
}
//Groupe Sanguin//////////////////////////////////////////////
getbyIdGroup(id: any){
  return this.http.get(`${this.url+"/Groupe/ById"}/${id}`);
}
listGroupe(){
  return this.http.get(this.url+"/Groupe/listGroupe");

}
//accepter////////////////////////////////////////////////////
AjoutAccepter(data: any){
  console.log(data);
  return this.http.post(this.url+"/Accepter/Ajout", data);
}
getAllAccept(){
  return this.http.get(this.url+"/Accepter/listAccept");
}


acceptByEtat(etat: boolean){

return this.http.get(this.url+"/Accepter/ByEtat/"+etat)
}

detailAccept(id:any){
  return this.http.get(`${this.url+"/Accepter/ById"}/${id}`)
}
updateDemande(id: any,  data: any){
  return this.http.put(`${this.url+"/Accepter/modifierAccept"}/${id}`,data);
}
AcceptByUser(id:any){
  return this.http.get(`${this.url+"/Accepter/AcceptByUser"}/${id}`)
}

//confirmer////////////////////////////////////////////////
AjoutConfirmer(data: any){
  console.log(data);
  return this.http.post(this.url+"/Confirmer/Ajout", data);
}
detailConfirmer(id:any){
  return this.http.get(`${this.url+"/Confirmer/ById"}/${id}`)
}
getAllConfirm(){
  return this.http.get(this.url+"/Confirmer/listConfirmer");
}
//RendevVous///////////////////////////////////////////////////
AjoutRendezVous(data: any){
  return this.http.post(this.url+"/RendezVous/Ajout", data);
}

updateRdv(id: any,  data: any){
  return this.http.put(`${this.url+"/RendezVous/modifierRendez"}/${id}`,data);
}
detailRdv(id:any){
  return this.http.get(`${this.url+"/RendezVous/detailRdv"}/${id}`)
}
//ConfirmbyAccept///////////////
isconfirm(data: any){
  return this.http.post(this.url+"/Confirmer/ConfirmByUser", data);
}
//AcceptByDemande/////////////////////
isAccept(data: any){
  return this.http.post(this.url+"/Accepter/AcceptByDemande", data);
}
//Notification
getAllNotif(id:any){
  return this.http.get(this.url+"/Accepter/accepterByDemande/"+id);
}

getConfirmById(id: any){
  return this.http.get(this.url+"/Confirmer/confirmByUser/"+id)
}



getNotifById(id: any){
  return this.http.get(this.url+"/Notification/NotifByUser/"+id)
}
getNotifId(id: any){
  return this.http.get(this.url+"/Notification/ById/"+id)
}
getConfirmId(id: any){
  return this.http.get(this.url+"/Confirmer/ById/"+id)
}

//Accept by user

getListAccept(user: any){
  return this.http.get(this.url+"/Accepter/AcceptByUtilisateur/"+user)
}
}
