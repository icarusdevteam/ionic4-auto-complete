export class AutoCompleteOptions {
  public animated:boolean = false;
  public autocomplete:'on'|'off' = 'off';
  public autocorrect:'on'|'off' = 'off';
  public cancelButtonIcon:string = 'md-arrow-back';
  public cancelButtonText:string = 'Cancel';
  public clearIcon:string = 'close';
  public clearInput:boolean = false;
  public clearOnEdit:boolean = false;
  public debounce:number = 250;
  public mode:'ios'|'md' = 'md';
  public noItems:string = '';
  public placeholder:string = 'Search';
  public searchIcon:string = 'search';
  public showCancelButton:boolean = false;
  public spellcheck:'on'|'off' = 'off';
  public type:string = 'search';
  public inputmode:string = 'text';
  public value:string = '';

  constructor() {

  }
}
