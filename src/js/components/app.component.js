class AppComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log('connected!');
        this.render();
    }

    disconnectedCallback() {
        console.log('disconnected!');
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        this.render();
      }

    render() {
        this.innerHTML = `

        <div id="tab-header" class="container">
            <div class="panel panel-primary">
                <ul class="nav nav-tabs justify-content-end nav-justified" id="tabheader">
                    <li class="nav-item">
                        <a class="nav-link active" data-tab-type="basic" data-toggle="tab"  href="#appview">Basic</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-tab-type="advance" data-toggle="tab" href="#appview">Advance</a>
                    </li>
                </ul>

                <div class="tab-content container clearfix tabcontent">
                    <div id="appview" class="tab-pane active">
                        <h4>Basic</h4>
                        <sr-form></sr-form>
                    </div>                  
                </div>
            </div>
        </div>
        `;
    }
}

if(!window.customElements.get("src-app")) {
    window.customElements.define("src-app", AppComponent);
}