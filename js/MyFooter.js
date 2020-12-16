class MyFooter extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <style>
        .site-footer {
          width: 100%;
          height: 120px;
          display: flex;
          justify-content: center;
          padding: 0 15px;
          margin-top: 30px
        }
		
		.site-footer ul {
	      list-style-type: none;
		}
        
        .site-footer .f-wrap {
          width: 960px;
          height: 70px;
        }
        
        .site-footer .f-wrap a {
          display: inline-block;
          font-size: 15px
        }
      </style>
      <footer class="site-footer py-2">
        <ul>
          <li>
            <div class="f-wrap row">
              <div class="col-sm-3 py-2">
                <img src="../images/yslogo.png" alt="YStools Logo" width="77" height="48">
                <small class="d-block mb-3 text-muted">&copy; 2017-2020</small>
              </div>
              <div class="col-sm-6 text-muted py-2">
                <h5>위치</h5>
      		    <a>41556 대구광역시 북구 노원동로6길 2 (노원동2가)3</a>
              </div>
              <div class="col-sm-3 text-muted py-2">
                <h5>대표전화</h5>
      		    <a>053)358-2013~4</a>
              </div>
            </div>
          </li>
          <li>
            <p class="row-sm-3 text-center text-muted">copyright&copy;2020 YSTools. all rights reserved</p>
          </li>
        </ul>
      </footer>
    `;
  }
}

customElements.define('myfooter-component', MyFooter);