import { Component, Input, OnInit } from '@angular/core';

export class Challenge {
  id: number;
  name: string;
  duration: number;
  description: string;
  code: string;
  result: string;
  language: string;
}

export const CHALLENGES: Challenge[] = [
  {id: 1, name: 'challenge ONE', duration: 120, description: 'this is a challenge description', code: '/******************************************************************************\n' +
    ' *  Compilation:  javac HelloWorld.java\n' +
    ' *  Execution:    java HelloWorld\n' +
    ' *\n' +
    ' *  Prints "Hello, World". By tradition, this is everyone\'s first program.\n' +
    ' *\n' +
    ' *  % java HelloWorld\n' +
    ' *  Hello, World\n' +
    ' *\n' +
    ' *  These 17 lines of text are comments. They are not part of the program;\n' +
    ' *  they serve to remind us about its properties. The first two lines tell\n' +
    ' *  us what to type to compile and test the program. The next line describes\n' +
    ' *  the purpose of the program. The next few lines give a sample execution\n' +
    ' *  of the program and the resulting output. We will always include such \n' +
    ' *  lines in our programs and encourage you to do the same.\n' +
    ' *\n' +
    ' ******************************************************************************/\n' +
    '\n' +
    'public class HelloWorld {\n' +
    '\n' +
    '    public static void main(String[] args) {\n' +
    '        // Prints "Hello, World" to the terminal window.\n' +
    '        System.out.println("Hello, World");\n' +
    '    }\n' +
    '\n' +
    '}', result: 'good job', language: 'java'},
  {id: 2, name: 'challenge TWO', duration: 101, description: 'this is a challenge description', code: '# Import the modules\n' +
    'import sys\n' +
    'import random\n' +
    '\n' +
    'ans = True\n' +
    '\n' +
    'while ans:\n' +
    '    question = raw_input("Ask the magic 8 ball a question: (press enter to quit) ")\n' +
    '    \n' +
    '    answers = random.randint(1,8)\n' +
    '    \n' +
    '    if question == "":\n' +
    '        sys.exit()\n' +
    '    \n' +
    '    elif answers == 1:\n' +
    '        print "It is certain"\n' +
    '    \n' +
    '    elif answers == 2:\n' +
    '        print "Outlook good"\n' +
    '    \n' +
    '    elif answers == 3:\n' +
    '        print "You may rely on it"\n' +
    '    \n' +
    '    elif answers == 4:\n' +
    '        print "Ask again later"\n' +
    '    \n' +
    '    elif answers == 5:\n' +
    '        print "Concentrate and ask again"\n' +
    '    \n' +
    '    elif answers == 6:\n' +
    '        print "Reply hazy, try again"\n' +
    '    \n' +
    '    elif answers == 7:\n' +
    '        print "My reply is no"\n' +
    '    \n' +
    '    elif answers == 8:\n' +
    '        print "My sources say no"', result: 'yatta', language: 'python'},
  {id: 3, name: 'challenge THREE', duration: 86, description: 'this is a challenge description', code: 'monkey.eat(new Banana())', result: 'nom nom nom nom', language: 'java'},
  {id: 4, name: 'challenge FOUR', duration: 23, description: 'this is a challenge description', code: 'Hello World!', result: 'Goodbye Bob', language: 'java'},
  {id: 5, name: 'challenge FIVE', duration: -7, description: 'this is a challenge description', code: 'str.toUppercase().toLowercase()', result: 'just make up your mind', language: 'java'},
  {id: 6, name: 'challenge SIX', duration: 1221, description: 'this is a challenge description', code: 'this.life.getMeaning()', result: '42', language: 'java'}
];

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {
  @Input() challenge: Challenge;
  dispCode = !false;

  constructor() { }

  ngOnInit() {
  }

}
