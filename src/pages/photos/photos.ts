import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FTP } from '@ionic-native/ftp';
import { File } from '@ionic-native/file';
import { PhotoLibrary } from '@ionic-native/photo-library';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'page-photos',
  templateUrl: 'photos.html'
})
export class PhotosPage {
  photo;
  library;
  constructor(public navCtrl: NavController, private fTP: FTP, private file: File, private photoLibrary: PhotoLibrary, private sanitizer: DomSanitizer) {
    this.photoLibrary.requestAuthorization().then(() => {
      this.photoLibrary.getLibrary().subscribe({
        next: library => {
          this.library = library;
          this.photoLibrary.getPhotoURL(library[0].id).then((su)=>{
            console.log(su)
          })
          this.photo = this.sanitizer.bypassSecurityTrustUrl(library[0].photoURL);
          library.forEach((libraryItem) => {
            console.log(libraryItem)
            // this.photoLibrary.getPhoto(libraryItem.id).then((su) => {
            //   console.log(su)
            // })
            // console.log(libraryItem.id);          // ID of the photo
            // console.log(libraryItem.photoURL);    // Cross-platform access to photo
            // console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
            // console.log(libraryItem.fileName);
            // console.log(libraryItem.width);
            // console.log(libraryItem.height);
            // console.log(libraryItem.creationDate);
            // console.log(libraryItem.latitude);
            // console.log(libraryItem.longitude);
            // console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
          });
        },
        error: err => { console.log('could not get photos'); },
        complete: () => { console.log('done getting photos'); }
      });
    })
      .catch(err => console.log('permissions weren\'t granted'));
  }

}
