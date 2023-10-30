const growcastCards = document.getElementById('growcast');
const webinarCards = document.getElementById('webinar');
const uxuiCards = document.getElementById('ux-ui');
const diversosCards = document.getElementById('diversos');
const iframePlay = document.getElementById('iframe');
const modalPlayer = new bootstrap.Modal(document.getElementById('modal-content'));

const growcastEl = cards.filter((item) => item.category === 'growcast');
const webinarEl = cards.filter((item) => item.category === 'webinar');
const uxUiEl = cards.filter((item) => item.category === 'ux-ui');
const diversosEl = cards.filter((item) => item.category === 'diversos');

function renderCards(element, items) {
	items.forEach((item) => {
		element.innerHTML += `
      <div class='col-12 col-sm-6 col-md-3 modalMovie'>
      <div class='hover-item'>
         <img
            src="${item.image}"
            class="img-fluid"
            alt=""
         />
         <p class="detail-movie" data-link="${item.link}" onclick="openCardMovie(this)">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="45"
               height="45"
               fill="white"
               class="bi bi-play-circle"
               viewBox="0 0 16 16"
            >
            <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
            d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"
            />
         </svg>
         <span>${item.title}</span>
      </p>
      </div>
   </div>
      `;
	});
}

function openCardMovie(element) {
	const link = element.getAttribute('data-link');
	iframePlay.innerHTML = `
   <iframe src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   `;
	modalPlayer.show();
}

renderCards(growcastCards, growcastEl);
renderCards(webinarCards, webinarEl);
renderCards(uxuiCards, uxUiEl);
renderCards(diversosCards, diversosEl);
