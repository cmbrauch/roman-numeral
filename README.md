#### By _**Peter Grimm, Spencer Moody, Chris Brauch**, June 11th, 2020_

## Description

The purpose of this project is to convert any inputted number between a value of 1-3999 into a roman numeral.

## Setup/Installation Requirements

* _Clone this repository on https://github.com/cmbrauch/roman-numeral.git
* _Open it in VS Code_
* _Run the command open index.html or go to cmbrauch.github.io/roman-numeral

## Specs

The program does not allow for anything other than numbers to be entered
* Example Input: a
* Example Output: --

 Program only allows less than or equal to 3999
* Example Input: 4000
* Example Output: --

 Progam only allows numbers greater than 0
* Example Input: 0
* Example Output: --

 Program turns number 1 into I
* Example Input: 1
* Example Output: I 

 Program turns number 5 into V
* Example Input: 5
* Example Output: V 

 Program turns number 10 into X
* Example Input: 10
* Example Output: X

 Program turns number 50 into L
* Example Input: 50
* Example Output: L

 Program turns number 100 into C
* Example Input: 100
* Example Output: C

 Program turns number 500 into D
* Example Input: 500
* Example Output: D

 Program turns number 1000 into M
* Example Input: 1000
* Example Output: M

 Program allows V, L, D only once consecutively in a numeral
* Example Input: 55
* Example Output: LV

 Program allows I, X, C, M only three times consecutively in a numeral

 * Example Input: 9, 99
 * Example Output: IX, XCIX

 In situations where there would be 3 or more consecutive numerals, numerals instead subtract from the nearest largest numeral

 * Example Input: 39, 40
 * Example Output: XXXIX, XV

 The program separates numerals into ones, tens, hundreds, and thousands

  *  Example Input: 99
  * Example Output: XCIX

## Known Bugs

_No bugs are known at this time_

## Support and contact details

Please contact any author with questions, comments, or concerns!


Peter Grimm <pagrimm@gmail.com>, Spencer Moody spencer.<moody@outlook.com>, Chris Brauch <cmbrauch00@gmail.com>

## Technologies Used

_Made in Windows 10_
_VS-Code_
_Javascript_
_CSS_

### License

This Software is licensed under the MIT license.

Copyright (c) 2020**_Epicodus_**