import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { Http, Headers } from '@angular/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'], 
    providers: [HomeService]
})

export class HomeComponent {
    private resp: any = '';
    private file: File;
    private filePath: EventTarget;
    private title: String = 'This is a home page.';

    constructor(private http: Http,
        private homeService: HomeService) { }

    onCreateUser(value: Object): void {
        this.homeService
            .createUser(value).subscribe(
            data => console.log(data),
            err => console.log(err),
            () => console.log('Request Completed')
        );
    }

    onChange(e: EventTarget): void {
        const eo: MSInputMethodContext = <MSInputMethodContext> e;
        const target: HTMLInputElement = <HTMLInputElement> eo.target;
        const files: FileList = target.files;
        this.file = files[0];
        console.log(this.file);
    }
}
