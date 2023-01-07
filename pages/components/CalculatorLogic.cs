using System;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            // Get the first number from the user
            Console.Write("Enter the first number: ");
            double num1 = Convert.ToDouble(Console.ReadLine());

            // Get the second number from the user
            Console.Write("Enter the second number: ");
            double num2 = Convert.ToDouble(Console.ReadLine());

            // Get the operation from the user
            Console.Write("Enter the operation (+, -, *, /): ");
            char operation = Convert.ToChar(Console.ReadLine());

            double result;

            // Perform the calculation and display the result
            switch (operation)
            {
                case '+':
                    result = num1 + num2;
                    Console.WriteLine($"{num1} + {num2} = {result}");
                    break;
                case '-':
                    result = num1 - num2;
                    Console.WriteLine($"{num1} - {num2} = {result}");
                    break;
                case '*':
                    result = num1 * num2;
                    Console.WriteLine($"{num1} * {num2} = {result}");
                    break;
                case '/':
                    result = num1 / num2;
                    Console.WriteLine($"{num1} / {num2} = {result}");
                    break;
                default:
                    Console.WriteLine("Invalid operator");
                    break;
            }
        }
    }
}
This program prompts the user to enter two numbers and an operation, and then performs the specified calculation on the numbers. The result is displayed to the user. The program uses a switch statement to determine which operation to perform based on the user's input.

I hope this helps! Let me know if you have any questions.




