export default {

	/*
	| Reprezentare textuala a datei "date" raportata la data curenta
	*/
	humanFromNow(date, format = 'YYYY-MM-DD HH:mm:ss')
	{
		if(! date )
		{
			return '';
		}
		return Moment(date, format).fromNow();
	},

	convert(date, from_format, to_format)
	{
		return Moment(date, from_format).format(to_format);
	},

	/*
	| Diferenta dintre doua momente de timp
	*/
	difference(date_to, date_from)
	{
		let 
			start = Moment(date_from, 'YYYY-MM-DD HH:mm:ss'),
			end = Moment(date_to, 'YYYY-MM-DD HH:mm:ss')
		;
		return Moment.duration(end.diff(start))._data;
	},

	_(date, lang, format = 'YYYY-MM-DD HH:mm:ss')
	{
		let _format = 'YYYY-MM-DD';

		if( lang == 'ro' )
		{
			_format = 'DD.MM.YYYY'
		}

		if( date.length == 19 )
		{
			_format += ' HH:mm:ss';
		}
		return Moment(date, format).format(_format);
	}
}