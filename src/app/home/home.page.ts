import { PdfViewerService } from "./../services/pdf-viewer.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  browser: any;
  constructor(private pdf: PdfViewerService) {}

  download(url, title) {
    this.pdf.download(url, title);
  }
}
