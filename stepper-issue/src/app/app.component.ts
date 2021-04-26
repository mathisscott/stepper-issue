import { Component, OnInit, VERSION } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import "@cds/core/file/register.js";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      files: ["", [Validators.required]]
    });
  }

  onFileChange($event: Event) {
    const target = $event.target as HTMLInputElement;
    if (!target.value) {
      this.form.controls.files.setValue(target.value);
    }
  }

  disable() {
    this.form.controls.files.disable();
  }

  enable() {
    this.form.controls.files.enable();
  }
}
