const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const questionCatergories = [
    {
        subject: 'HTML',
        questions: [
            {
                question: 'What does HTML stand for?',
                answers: ['Hyper Toolset Marking Language', 'Hyper Text Markup Language', 'Hyperlinks Text Markup Language'],
                correct: 'Hyper Text Markup Language',
                scoreLevel: 'easy',
            },
            {
                question: 'What element used for a main heading?',
                answers: ['<heading1>', '<head1>', '<h1>'],
                correct: '<h1>',
                scoreLevel: 'easy',
            },
            {
                question: 'What is the HTML syntax element for inserting a line break?',
                answers: ['<lb>', '<break>', '<br>'],
                correct: '<br>',
                scoreLevel: 'medium',
            },
            {
                question: 'What is HMTL syntax is used at top of the page?',
                answers: ['<!DOCTYPE html>', '<html lang="en">', '<head>'],
                correct: '<!DOCTYPE html>',
                scoreLevel: 'medium',
            },
            {
                question: 'What is the HTML syntax for creating a hyperlink?',
                answers: ['<a>www.vuevixens.org</a>', '<a href="www.vuevixens.org"></a>', '<a url="www.vuevixens.org"></a>'],
                correct: '<a href="www.vuevixens.org"></a>',
                scoreLevel: 'hard',
            },
        ],
    },
        {
        subject: 'CSS',
        questions: [
            {
                question: 'What does CSS stand for?',
                answers: ['Computer Style Sheets', 'Cascading Style Sheets', 'Concurrent Style Sheets'],
                correct: 'Cascading Style Sheets',
                scoreLevel: 'easy',
            },
            {
                question: 'What is the HTML syntax for referring to an external style sheet?',
                answers: ['<stylesheet>styles.css</stylesheet>', '<style src="StyleSheet.css">', '<link rel="stylesheet" href="/styles.css">'],
                correct: '<link rel="stylesheet" href="/styles.css">',
                scoreLevel: 'easy',
            },
            {
                question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
                answers: ['<header>', '<head>', '<body>'],
                correct: '<head>',
                scoreLevel: 'medium',
            },
            {
                question: 'What is the CSS syntax for defining a background color?',
                answers: ['{body: color = white;}', '{body: background-color = white;}', 'body { background-color: white; }'],
                correct: 'body { background-color: white; }',
                scoreLevel: 'medium',
            },
            {
                question: '',
                answers: ['/* comment */', '// comment //', '**comment**'],
                correct: '/* comment */',
                scoreLevel: 'hard',
            },
        ],
    },
        {
            subject: 'Javascript',
            questions: [
            {
                question: 'Inside which HTML element do we put the JavaScript?',
                answers: ['<javascript>', '<js>', '<script>'],
                correct: '<script>',
                scoreLevel: 'easy',
            },
            {
                question: 'What event allows the user to input some text?',
                answers: ['input-text', 'input', 'inputText'],
                correct: 'input',
                scoreLevel: 'easy',
            },
            {
                question: 'Which one of these is NOT a standard variable?',
                answers: ['event', 'const', 'var'],
                correct: 'event',
                scoreLevel: 'medium',
            },
            {
                question: 'The universal method exposed in the DOM for registering event handlers is called?',
                answers: ['addEventListener', 'addListener', 'addEvent'],
                correct: 'addEventListener',
                scoreLevel: 'medium',
            },
            {
                question: 'We can retrieve the elements labelled "id=" in HTML by using?',
                answers: ['script.getElementById', 'element.getElementById', 'document.getElementById'],
                correct: 'document.getElementById',
                scoreLevel: 'hard',
            },
        ],
    },
]

/* Consider expanding for cover additional sections 
    {
        subject: 'GitHub',
        questions: [
            {
                question: '',
                answers: ['', '', ''],
                correct: '',
                scoreLevel: 'easy'
            },
            {
                question: '',
                answers: ['', '', ''],
                correct: '',
                scoreLevel: 'easy'
            },
            {
                question: '',
                answers: ['', '', ''],
                correct: '',
                scoreLevel: 'medium'
            },
            {
                question: '',
                answers: ['', '', ''],
                correct: '',
                scoreLevel: 'medium'
            },
            {
                question: '',
                answers: ['', '', ''],
                correct: '',
                scoreLevel: 'hard'
            },
        ]
    },
    {
        subject: 'WebDev',
        questions: [
            {
                question: '',
                answers: ['', '', ''],
                correct: '',
                scoreLevel: 'easy'
            },
            {
                question: '',
                answers: ['', '', ''],
                correct: '',
                scoreLevel: 'easy'
            },
            {
                question: '',
                answers: ['', '', ''],
                correct: '',
                scoreLevel: 'medium'
            },
            {
                question: '',
                answers: ['', '', ''],
                correct: '',
                scoreLevel: 'medium'
            },
            {
                question: '',
                answers: ['', '', ''],
                correct: '',
                scoreLevel: 'hard'
            },
        ] 
    }, */



/* define columns of subjects here --- loops in loops */
function addCategory(category) {
    /* define column title --- subject */
    const column = document.createElement('div')
    column.classList.add('subject-column')

    const subjectTitle = document.createElement('div')
    subjectTitle.classList.add('subject-title')
    subjectTitle.innerText = category.subject

    column.appendChild(subjectTitle)
    game.append(column)

}

questionCatergories.forEach(category => addCategory(category))

