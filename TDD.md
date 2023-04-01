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

