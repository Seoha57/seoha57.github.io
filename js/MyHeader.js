class MyHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <style>
	    .site-header {
          background-color: rgba(0, 0, 0, .85);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          backdrop-filter: saturate(180%) blur(20px);
          border-bottom: 1px solid #000000;
        }
        .site-header a {
          color: #999;
          transition: ease-in-out color .15s;
        }
        .site-header a:hover {
          color: #fff;
          text-decoration: none;
        }
      </style>
      <nav class="site-header sticky-top py-1">
        <div class="container d-flex flex-column flex-md-row justify-content-between">
	      <a class="py-2" href="javascript:subLink(1)" aria-label="Product">
          <img src="../images/yslogo_simbol.png" alt="YStools Logo" width="24" height="24" >
          </a>
          <a class="py-2 d-none d-md-inline-block" href="javascript:subLink(2)">기업정보</a>
          <a class="py-2 d-none d-md-inline-block" href="javascript:subLink(3)">물품정보</a>
          <a class="py-2 d-none d-md-inline-block" href="#">물품정보</a>
          <a class="py-2 d-none d-md-inline-block" href="javascript:subLink(5)">주문하기</a>
	    </div>
      </nav>
    `;
  }
}

customElements.define('myheader-component', MyHeader);