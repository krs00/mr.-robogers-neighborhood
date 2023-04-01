Describe beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(10);
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Test: "If array element includes the number 1, all digits
are replaced with "Beep!"
Code: beepBoop(10)
Expected Output: [0, "Beep!", 2, 3, 4, 5, 6, 7, 8, 9, "Beep!"]

Test: "If array element includes the number 2, all digits
are replaced with "Boop!"
Code: beepBoop(10)
Expected Output: [0, "Beep!", "Boop!", 3, 4, 5, 6, 7, 8, 9, "Beep!"]

Test: "If array element includes the number 3, all digits
are replaced with "Won't you be my neighbor?"
Code: beepBoop(10)
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!"]

Test: Hierarchy of substitutions, "Beep!" should take substitution priority unless "Boop!" does, the substitution for "Beep!" should apply unless there is a number 3, then it will substitute "Won't you be my neighbor?"
Code: beepBoop(25)
Expected Output:

Array Element 13 = "Won't you be my neighbor?"
Array Element 12 = "Boop!"
Array Element 23 = "Won't you be my neighbor?"
Array Element 21 = "Boop!"


