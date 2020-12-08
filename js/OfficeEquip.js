class OfficeEquip extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <style>
        .product_main {
          margin-left: 140px;
          overflow: hiddn;
          padding: 0px 10px;
          border-bottom: 2px solid #000000;
        }
        
        .product_main table {
          border-collapse: collapse;
          border: 1px solid black;
          table-layout: auto;
          width: 100%; 
        }
        
        .product_main table th {
          border: 1px solid black;
        }
        
        .product_main table td {
          border: 1px solid black;
        }
        
        .product_main table a {
          font-family: Arial, sans-serif;
        }
      </style>
      <div class="product_main d-md-flex flex-md-equal w-80 my-md-3 pl-md-3">
        <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div class="my-3 py-3">
            <h2 class="display-5">가정용공구세트</h2>
            <table class="a">
		      <tbody>
	            <tr>
	              <th>품번</th>
		          <td>1223919</td>
	            </tr>
	            <tr>
	              <th>브랜드명</th>
		          <td>스마토 가정용공구세트</td>
	            </tr>
	            <tr>
	              <th>규격</th>
		          <td>12PCS</td>
	            </tr>
	            <tr>
	              <th>가격</th>
		          <td>미정</td>
	            </tr>
		      </tbody>
		    </table>
          </div>
          <div class="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
	        <img src="../images/WorkTools/공구세트(12PCS).jpg" alt="WorkTools" width="350" height="350">
	      </div>
        </div>
        <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 py-3">
            <h2 class="display-5">가정용공구세트</h2>
            <table class="a">
		      <tbody>
	            <tr>
	            <th>품번</th>
		        <td>1223920</td>
	          </tr>
	          <tr>
	            <th>브랜드명</th>
		        <td>스마토 가정용공구세트</td>
	          </tr>
	          <tr>
	            <th>규격</th>
		        <td>16PCS</td>
	          </tr>
	          <tr>
	            <th>가격</th>
		        <td>미정</td>
	          </tr>
		      </tbody>
		    </table>
          </div>
          <div class="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
	        <img src="../images/WorkTools/공구세트(16PCS).jpg" alt="WorkTools" width="350" height="350">
	      </div>
        </div>
      </div>
	  <div class="product_main d-md-flex flex-md-equal w-80 my-md-3 pl-md-3">
        <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 py-3">
            <h2 class="display-5">가정용공구세트</h2>
            <table class="a">
	    	  <tbody>
	            <tr>
	              <th>품번</th>
	    	      <td>1223921</td>
	            </tr>
	            <tr>
	              <th>브랜드명</th>
	    	      <td>스마토 가정용공구세트</td>
	            </tr>
	            <tr>
	              <th>규격</th>
	    	      <td>20PCS</td>
	            </tr>
	            <tr>
	              <th>가격</th>
	    	      <td>미정</td>
	            </tr>
	    	  </tbody>
	    	</table>
          </div>
          <div class="bg-dark shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
	        <img src="../images/WorkTools/공구세트(20PCS).jpg" alt="WorkTools" width="350" height="350">
	      </div>
        </div>
        <div class="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div class="my-3 py-3">
            <h2 class="display-5">니퍼</h2>
            <table class="a">
	    	  <tbody>
	            <tr>
	              <th>품번</th>
	    	      <td>1207595</td>
	            </tr>
	            <tr>
	              <th>브랜드명</th>
	    	      <td>스마토 플라이어</td>
	            </tr>
	            <tr>
	              <th>규격</th>
	    	      <td>SM-D06</td>
	            </tr>
	            <tr>
	              <th>가격</th>
	    	      <td>미정</td>
	            </tr>
	    	  </tbody>
	    	</table>
          </div>
          <div class="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
	        <img src="../images/WorkTools/니퍼SMTC.jpg" alt="WorkTools" width="350" height="350">
	      </div>
        </div>
      </div>
	
	
	  <div class="product_main d-md-flex flex-md-equal w-80 my-md-3 pl-md-3">
        <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div class="my-3 py-3">
            <h2 class="display-5">가정용공구세트</h2>
            <table class="a">
		      <tbody>
	            <tr>
	              <th>품번</th>
		          <td>1223919</td>
	            </tr>
	            <tr>
	              <th>브랜드명</th>
		          <td>스마토 가정용공구세트</td>
	            </tr>
	            <tr>
	              <th>규격</th>
		          <td>12PCS</td>
	            </tr>
	            <tr>
	              <th>가격</th>
		          <td>미정</td>
	            </tr>
		      </tbody>
		    </table>
          </div>
          <div class="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
	        <img src="../images/WorkTools/공구세트(12PCS).jpg" alt="WorkTools" width="350" height="350">
	      </div>
        </div>
        <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 py-3">
            <h2 class="display-5">가정용공구세트</h2>
            <table class="a">
		      <tbody>
	            <tr>
	              <th>품번</th>
		          <td>1223920</td>
	            </tr>
	            <tr>
	              <th>브랜드명</th>
		          <td>스마토 가정용공구세트</td>
	            </tr>
	            <tr>
	              <th>규격</th>
		          <td>16PCS</td>
	            </tr>
	            <tr>
	              <th>가격</th>
		          <td>미정</td>
	            </tr>
		        </tbody>
		      </table>
            </div>
            <div class="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
	          <img src="../images/WorkTools/공구세트(16PCS).jpg" alt="WorkTools" width="350" height="350">
	        </div>
          </div>
        </div>
	    <div class="product_main d-md-flex flex-md-equal w-80 my-md-3 pl-md-3">
          <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 py-3">
              <h2 class="display-5">가정용공구세트</h2>
              <table class="a">
	       	  <tbody>
	               <tr>
	                 <th>품번</th>
	       	      <td>1223921</td>
	               </tr>
	               <tr>
	                 <th>브랜드명</th>
	       	      <td>스마토 가정용공구세트</td>
	               </tr>
	               <tr>
	                 <th>규격</th>
	       	      <td>20PCS</td>
	               </tr>
	               <tr>
	                 <th>가격</th>
	       	      <td>미정</td>
	               </tr>
	       	  </tbody>
	       	</table>
            </div>
            <div class="bg-dark shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
	           <img src="../images/WorkTools/공구세트(20PCS).jpg" alt="WorkTools" width="350" height="350">
	         </div>
          </div>
          <div class="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div class="my-3 py-3">
              <h2 class="display-5">니퍼</h2>
              <table class="a">
	       	  <tbody>
	               <tr>
	                 <th>품번</th>
	       	      <td>1207595</td>
	               </tr>
	               <tr>
	                 <th>브랜드명</th>
	       	      <td>스마토 플라이어</td>
	               </tr>
	               <tr>
	                 <th>규격</th>
	       	      <td>SM-D06</td>
	               </tr>
	               <tr>
	                 <th>가격</th>
	       	      <td>미정</td>
	               </tr>
	       	  </tbody>
	       	</table>
          </div>
          <div class="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
	        <img src="../images/WorkTools/니퍼SMTC.jpg" alt="WorkTools" width="350" height="350">
	      </div>
        </div>
      </div>
    `;
  }
}

customElements.define('officeequip-component', OfficeEquip);