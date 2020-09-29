export class app{
    constructor(){
        this.pageContent = "";
        this.init();
    }
    async init() {
      await fetch('/src/views/header.html')
      .then (res => res.text())
      .then (data => this.pageContent += data) ;

      fetch('/src/views/slide.html')
      .then (res => res.text())
      .then (data => this.pageContent += data) ;

      await fetch('/src/views/home.html')
      .then (res => res.text())
      .then (data => this.pageContent += data) ;

      await fetch('/src/views/team.html')
      .then (res => res.text())
      .then (data => this.pageContent += data) ;

      await fetch('/src/views/place.html')
      .then (res => res.text())
      .then (data => this.pageContent += data) ;


      await fetch('/src/views/contact.html')
      .then (res => res.text())
      .then (data => this.pageContent += data) ;

      await fetch('/src/views/footer.html')
      .then (res => res.text())
      .then (data => this.pageContent += data) ;

      document.body.innerHTML = this.pageContent;

    }
}