class Question
{
	constructor(config)
	{
		this.type = config.type;
		this.answers = config.answers;
		this.accepted_answers = config.accepted_answers;
		this.correct_answer = config.correct_answer;
	}

	updateAnswers()
	{
		return this['updateAnswers' + this.type]();
	}

	updateAnswerstext()
	{
		let correct_answer = _.join(this.accepted_answers, ', ');
		let error_by_type = ''
		if(correct_answer.trim().length == 0)
		{
			error_by_type = 'Please complete accepted answers list';
		}
		return {
			correct_answer: correct_answer,
			error_by_type: error_by_type
		}
	}

	updateAnswersradio()
	{
		let correct_answer = this.accepted_answers;
		let error_by_type = ''
        if(correct_answer.trim().length == 0)
		{
			error_by_type = 'Please check the correct option';
		}
		return {
			correct_answer: correct_answer,
			error_by_type: error_by_type
		}
	}

	updateAnswerscheck()
	{
		let correct_answer = this.accepted_answers; 
		let error_by_type = ''
        if(correct_answer.length == 0)
        {
            this.error_by_type = 'Please check all correct options';
        }
        return {
			correct_answer: correct_answer,
			error_by_type: error_by_type
		}
	}

	updateAnswersmatch()
	{
		let correct_answer = this.accepted_answers; 
		let error_by_type = ''
        if(_.keys(correct_answer).length == 0)
        {
            this.error_by_type = 'Please provide all matches options';
        }
		return {
			correct_answer: correct_answer,
			error_by_type: error_by_type
		}
	}

	validateByType()
	{
		return this['validate' + this.type]();
	}

	validatetext()
	{
		let valid = this.correct_answer.trim().length > 0
		return {
            valid: valid,
            message: valid ? '': 'Please complete accepted answers list'
        }
	}

	validateradio()
	{
		let valid = this.answers.length > 0
		if( ! valid )
		{
			return {
                valid: false,
                message: 'Please define the options list'
            }
		}
		valid = this.correct_answer.trim().length > 0
		return {
            valid: valid,
            message: valid ? '': 'Please check the correct option'
        }
	}

	validatecheck()
	{
		let valid = this.answers.length > 0
		if( ! valid )
		{
			return {
                valid: false,
                message: 'Please define the options list'
            }
		}
		valid = this.correct_answer.length > 0;
		return {
            valid: valid,
            message: valid ? '': 'Please check all correct options'
        }
	}

	validatematch()
	{
		let valid = this.answers.length > 0
		if( ! valid )
		{
			return {
                valid: false,
                message: 'Please define the options list'
            }
		}
		valid = _.keys(this.correct_answer).length > 0
		return {
            valid: valid,
            message: valid ? '': 'Please provide all matches options'
        }
	}
}

export default Question;