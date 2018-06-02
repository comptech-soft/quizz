const translations = {
	
	'quiz': {
		'points': '{count} punct ::: {count} puncte',
		'question': 'Întrebarea {index} din {total}',
		'accepted-answer': 'Răspunsul corect',
		'your-answer': 'Răspunsul dat de tine',
		'explanation': 'Explicații',
	},

	'welcome': {
		'header': 'Mars Quiz',
		'info': '<h2>Teste Dein Wissen über den Mars, und gewinne einer der 3 Preise!</h2><p>1. Preis: Ein Amazon Gutschein in Wert von 25 Euro</p><p>2. Preis: Ein Amazon Gutschein in Wert von 20 Euro</p><p>3. Preis: Ein Amazon Gutschein in Wert von 15 Euro</p>',
	},

	'ranking': {
		'title': 'Topul actual',
		'total': 'A participat {total} concurent ::: Au participat {total} concurenți',
		'class': 'Elev în clasa  {class}',
	},

	'play': {

		'player-caption': 'Informații personale',
		'player-info': 'Phasellus mi nisl, accumsan id laoreet sed, cursus ac ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce eu fringilla est. Morbi vulputate in neque et euismod. Proin imperdiet lacus non urna porttitor pulvinar. Aenean quam lorem, facilisis a condimentum vel, posuere nec nunc. Aliquam erat volutpat.',
		
		'finish': {
			'header': 'Felicitări. Ați terminat testul!',
			'body': 'Mai jos aveți aveși o listă cu intrebările testului, răspunsurile corecte, răspunsurile date de dumneavoastră și punctajul obținut la fiecare întrebare. În final veți vedea numărul total de puncte realizate și procentajul obținut.',
		},

		'form': {
			'labels': {
				'first_name': 'Numele',
				'last_name': 'Prenumele',
				'class': 'Clasa',
				'email': 'Adresa se email',
				'start-contest': 'Începe testul',
			}
		},

		'actions': {
			'restart': 'Repornește testul',
			'next': 'Întrebarea următoare',
			'prev': 'Întrebarea anterioară',
			'finish': 'Am terminat!',
		},

		'modals': {
			'finish': {
				'title': 'Confirmați terminarea testului!',
				'content': 'Sunteți sigur că ați terminat testul? Dacă apăsați Da, răspunsurile vor fi salvate, procesate și veți primi un raport cu punctajul realizat. Dacă doriți revizuirea răspunsurilor, apăsați Nu.',
				'yes': 'Da',
				'no': 'Nu',
			},

			'restart': {
				'title': 'Confirmați reînceperea testului!',
				'content': 'Doriți să reîncepeți testul? Dacă apăsați Da toate răspunsurile vor fi anulate și testul va reîncepe cu prima întrebare. Dacă apăsați Nu veți continua de unde ați rămas.',
				'yes': 'Da',
				'no': 'Nu',
			}
		}

	},

	'report': {
		'summary': {
			'points-achieved': 'Număr de puncte realizate',
			'points-available': 'Număr de puncte disponibil',
			'percent-achieved': 'Procentaj realizat',
			'percent-available': 'Procentaj minim pentru succes',
		}
	}

};

export default translations;