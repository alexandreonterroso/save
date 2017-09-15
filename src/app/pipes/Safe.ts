import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'safeUrl'})
export class Safe {
  constructor(private sanitizer: DomSanitizer){

  }

  transform(url){
      return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
