var __index = {"config":{"lang":["de"],"separator":"[\\s\\-]+","pipeline":["stopWordFilter"]},"docs":[{"location":"index.html","title":"Welcome to MkDocs","text":"<p>For full documentation visit mkdocs.org.</p>"},{"location":"index.html#commands","title":"Commands","text":"<ul> <li><code>mkdocs new [dir-name]</code> - Create a new project.</li> <li><code>mkdocs serve</code> - Start the live-reloading docs server.</li> <li><code>mkdocs build</code> - Build the documentation site.</li> <li><code>mkdocs -h</code> - Print help message and exit.</li> </ul>"},{"location":"index.html#project-layout","title":"Project layout","text":"<pre><code>mkdocs.yml    # The configuration file.\ndocs/\n    index.md  # The documentation homepage.\n    ...       # Other markdown pages, images and other files.\n</code></pre>"},{"location":"dateien.html","title":"Lesen und Schreiben von Dateien","text":"<p>In diesem Abschnitt wird beschrieben, wie Sie mit Hilfe der Objekte StreamReader und StreamWriter Dateien lesen bzw. schreiben k\u00f6nnen.</p>"},{"location":"dateien.html#dateien-offnen-und-schlieen","title":"Dateien \u00f6ffnen und schlie\u00dfen","text":"<p>Um eine Datei zu lesen bzw. zu schreiben muss diese zuerst ge\u00f6ffnet werden.</p> <p>Ist eine Datei ge\u00f6ffnet, kann Sie (je nach Verwendungszweck) eventuell nicht von anderen Prozessen verwendet werden.</p> <p>Um die Datei f\u00fcr andere Prozesse wieder frei zu geben, muss der Stream bzw. die Datei wieder geschlossen werden:</p>"},{"location":"dateien.html#close","title":"Close()","text":"<pre><code>// StreamReader initialisieren (Datei \u00f6ffnen) (1)\nStreamReader sr = new StreamReader(\"TestDatei.txt\");\n// StreamReader wird in diesem Abschnitt verwendet\n// Datei freigeben (2)\nsr.Close();\n</code></pre> <ol> <li>Beim Erstellen des StreamReader bzw. StreamWriter-Objkets wird die Datei TestDatei.txt ge\u00f6ffnet.</li> <li>Close() schlie\u00dft die Datei und gibt sie somit wieder frei.</li> </ol>"},{"location":"dateien.html#using","title":"using","text":"<p>Da das Schlie\u00dfen der Datei oft vergessen wird, kann alternativ <code>using</code> verwendet werden:</p> <pre><code>// StreamReader initialisieren (1)\nusing (StreamReader sr = new StreamReader(\"TestDatei.txt\"))\n{\n// StreamReader wird in diesem Codeblock verwendet\n} // Datei wird automatisch freigegeben (2)\n</code></pre> <ol> <li>Beim Erstellen des StreamReader bzw. StreamWriter-Objkets wird die Datei TestDatei.txt ge\u00f6ffnet.</li> <li>Beim Verlassen des Codeblocks wird der StreamReader automatisch geschlossen. Kein explizites aufrufen von Close() n\u00f6tig.</li> </ol>"},{"location":"dateien.html#streamreader-datei-lesen","title":"StreamReader (Datei lesen)","text":"<p>In der Regel werden Dateien zeilenweise mittels ReadLine() gelesen:</p> <pre><code>// StreamReader Initialisieren (1)\nusing (StreamReader sr = new StreamReader(\"TestDatei.txt\"))\n{ // Erste Zeile einlesen (2)\nstring line = sr.ReadLine();\n// Solange es etwas zu lesen gibt\nwhile (line != null)\n{\n// Verarbeiten der Zeile (3)\nConsole.WriteLine(line);\n// Einlesen der n\u00e4chsten Zeile (4)\nline = sr.ReadLine();\n}\n} </code></pre> <ol> <li>Das <code>using</code>-Keyword stellt sicher, dass der StreamReader wieder geschlossen wird</li> <li>Hier wird line mit der ersten Zeile von TestDatei.txt initialisiert</li> <li>Das \"Verarbeiten\" ist hier eine einfach Konsolenausgabe. Nat\u00fcrlich kann hier alles erdenkliche mit der Zeile passieren.</li> <li>Hier wird die n\u00e4chste Zeile eingelesen. Dieser Schritt ist in der Regel immer der letzte Schritt in der Schleife, da danach wieder gepr\u00fcft werden muss, ob es noch etwas einzulesen gibt.</li> </ol>"},{"location":"dateien.html#methoden","title":"Methoden","text":"Methode Erkl\u00e4rung Close() Closes the StreamReader object and the underlying stream, and releases any system resources associated with the reader. Peek() Returns the next available character but does not consume it. Calling this method multiple times will always return the same character (as Opposed to Read()). Read() Reads the next character from the input stream and advances the character position by one character. Read(Char[], Int32, Int32) Reads a specified maximum of characters from the current stream into a buffer, beginning at the specified index. ReadLine() Reads a line of characters from the current stream and returns the data as a string."},{"location":"dateien.html#streamwriter-datei-schreiben","title":"StreamWriter (Datei schreiben)","text":"<p>In der Regel werden Dateien zeilenweise mittels WriteLine() geschrieben:</p> <pre><code>// StreamWriter Initialisieren (1)\nusing (StreamWriter sw = new StreamWriter(\"TestDatei.txt\"))\n{\n// Schreibe erste Zeile in TestDatei.txt\nsw.WriteLine(\"Hello World!!\");\n// Schreibe zweite Zeile in TestDatei.txt\nsw.WriteLine(\"From the StreamWriter class\");\n} </code></pre> <ol> <li><code>using</code> stellt sicher, dass die Datei wieder freigegeben wird.</li> </ol>"},{"location":"dateien.html#methoden_1","title":"Methoden","text":"Methode Erkl\u00e4rung Close() Closes the current StreamWriter object and the underlying stream. Write(String) Writes a string to the stream. WriteLine() Writes a line terminator to the text stream."},{"location":"dateien.html#beispiel","title":"Beispiel","text":"<p>In diesem Beispiel wird ein Text einer Datei in Gro\u00dfbuchstaben umgewandlet:</p> <pre><code>class Program\n{\nstatic void main()\n{\n// Streams initialisieren (1)\nusing (StreamReader sr = new StreamReader(\"kleinBuchstaben.txt))\nusing (StreamWriter sw = new StreamWriter(\"grossBuchstaben.txt\"))\n{\n// Erste Zeile lesen\nstring zeile = sr.ReadLine();\n// Solange es etwas zu lesen gibt\nwhile (zeile != null)\n{\n// Inhalt der Zeile gro\u00df schreiben\nstring zeileGross = zeile.ToUpper();\n// Grossgeschriebene Zeile in Textdatei schreiben\nsw.writeLine(zeileGross);\n// N\u00e4chste Zeile lesen\nzeile = sr.ReadLine();\n}\n}\n// Streams werden automatisch geschlossen\n}\n}\n</code></pre> <ol> <li>using kann auch hintereinander geschrieben werden, um mehrere Objekte zu verwalten.</li> </ol>"},{"location":"schleifen.html","title":"Wiederholung von Vorg\u00e4ngen durch Schleifen","text":"<p>Die <code>while</code>-Anweisung pr\u00fcft eine Bedingung und f\u00fchrt die Anweisung oder den Anweisungsblock nach <code>while</code> aus. Damit wird die Bedingung wiederholt \u00fcberpr\u00fcft und die Ausf\u00fchrung dieser Anweisungen wiederholt, bis die Bedingung \"false\" lautet. <pre><code>while(BEDINGUNG == true)\n{\n// Codeblock wird solange ausgef\u00fchrt, bis BEDINGUNG nicht mehr TRUE\n}\n</code></pre></p> <p>Wichtig!</p> <p>Stellen Sie sicher, dass die Schleifenbedingung <code>while</code> zu \"false\" wechselt, nachdem Sie den Code ausgef\u00fchrt haben. Andernfalls erstellen Sie eine Endlosschleife, durch die das Programm niemals beendet wird.</p>"},{"location":"schleifen.html#while","title":"while","text":"<pre><code>int counter = 0;\nwhile (counter &lt; 5)\n{\nConsole.WriteLine($\"Hello World! The counter is {counter}\");\ncounter++;\n}\n</code></pre> Output <pre><code>Hello World! The counter is 0\nHello World! The counter is 1\nHello World! The counter is 2\nHello World! The counter is 3\nHello World! The counter is 4\n</code></pre>"},{"location":"schleifen.html#dowhile","title":"do...while","text":"<p>Die <code>do...while</code>-Schleife f\u00fchrt den Code zuerst aus und \u00fcberpr\u00fcft anschlie\u00dfend die Bedingung. Die <code>do...while</code>-Schleife wird im folgenden Code gezeigt: <pre><code>int counter = 0;\ndo\n{\nConsole.WriteLine($\"Hello World! The counter is {counter}\");\ncounter++;\n} while (counter &lt; 5);\n</code></pre></p> Output <pre><code>Hello World! The counter is 0\nHello World! The counter is 1\nHello World! The counter is 2\nHello World! The counter is 3\nHello World! The counter is 4\n</code></pre>"},{"location":"schleifen.html#for-schleife","title":"for-Schleife","text":"<p>Da die Operationen INITIALISIERUNG, Pr\u00fcfung der BEDINGUNG und die WERTVER\u00c4NDERUNG sehr oft in einer Schleife ben\u00f6tigt werden, wird hierf\u00fcr oft die <code>for-Schleife</code> verwendet. Diese ist \u00fcbersichtlicher, da die drei Operationen direkt an einem Ort stehen: <pre><code>for (INITIALISIERUNG; BEDINGUNG; WERTVER\u00c4NDERUNG) {\n// auszuf\u00fchrender Quellcode\n}\n</code></pre></p> <p>Jede <code>for</code>-Schleife l\u00e4sst sich in eine <code>while</code>-Schleife \u00fcbersetzen: <pre><code>INITIALISIERUNG;\nwhile(BEDINGUNG) {\n// auszuf\u00fchrender Quellcode\nWERTVER\u00c4NDERUNG // (immer die letzte Anweisung)\n}\n</code></pre></p>"},{"location":"schleifen.html#beispiele","title":"Beispiele","text":""},{"location":"schleifen.html#counter","title":"counter","text":"<pre><code>for (int counter = 0; counter &lt; 5; counter++) {\nConsole.WriteLine($\"Hello World! The counter is {counter}\");\n}\n</code></pre> Output <pre><code>Hello World! The counter is 0\nHello World! The counter is 1\nHello World! The counter is 2\nHello World! The counter is 3\nHello World! The counter is 4\n</code></pre>"},{"location":"schleifen.html#array","title":"Array","text":"<pre><code>string[] cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\nfor(int i = 0; i &lt; cars.Length; i++) {\nConsole.WriteLine(cars[i]);\n}\n</code></pre> Output <pre><code>Volvo\nBMW\nFord\nMazda\n</code></pre> <p>Diese Schleife ist equivalent zum Array-Beispiel der foreach-Schleife.</p> <p>Dieses Beispiel hat das gleiche Verhalten wie die while-Schleife, jedoch sind die Initialisierung, Bedingung und Wert\u00e4nderung an einer Stelle. Der Vorteil zeigt sich vor allem bei l\u00e4ngeren Codebl\u00f6cken, bei denen bei der <code>while</code>-Schleife erst am Ende des Blocks die Wert\u00e4nderung stattfinden w\u00fcrde.</p>"},{"location":"schleifen.html#foreach-schleife","title":"<code>foreach</code>-Schleife","text":"<p>Beim Iterieren von Listen und Arrays wird der Index der <code>for</code>-Schleife oft nur gef\u00fchrt, um auf ein Element zuzugreifen.</p> <p>Eine indexlose Alternative bietet die <code>foreach</code>-Schleife:</p> <pre><code>foreach(type variableName in arrayName) {\n// auszuf\u00fchrender Quellcode\n}\n</code></pre> <p>In der <code>foreach</code>-Schleife wird <code>variableName</code> in jedem Durchgang mit dem n\u00e4chsten Array- bzw. Listenelement belegt.</p>"},{"location":"schleifen.html#beispiele_1","title":"Beispiele","text":""},{"location":"schleifen.html#array_1","title":"Array","text":"<pre><code>string[] cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\nforeach (string car in cars) {\nConsole.WriteLine(car);\n}\n</code></pre> Output <pre><code>Volvo\nBMW\nFord\nMazda\n</code></pre> <p>Diese Schleife ist equivalent zum Array-Beispiel der for-Schleife.</p>"},{"location":"schleifen.html#liste","title":"Liste","text":"<pre><code>List&lt;string&gt; cars = new List&lt;string&gt;;\ncars.Add(\"Volvo\");\ncars.Add(\"BMW\");\ncars.Add(\"Ford\");\ncars.Add(\"Mazda\");\nforeach (string car in cars) {\nConsole.WriteLine(car);\n}\n</code></pre> Output <pre><code>Volvo\nBMW\nFord\nMazda\n</code></pre>"},{"location":"string.html","title":"String","text":""},{"location":"string.html#initialisieren","title":"Initialisieren","text":"<pre><code>// Declare without initializing.\nstring message1;\n// Initialize with string\nstring message2 = \"World\";\n// Set string content\nmessage1 = \"Hello\";\n// String concatination\nmessage3 = message1 + \" \" + message2 + \"!\";\n// Yields the same output\nConsole.WriteLine($\"{message1} {message2}!\");\nConsole.WriteLine(message3);\n</code></pre> Output <pre><code>Hello World!\nHello World!\n</code></pre>"},{"location":"string.html#contains-zeichenfolge-finden","title":"Contains (Zeichenfolge finden)","text":"<p>Die Methode Contains() findet eine beliebige Zeichenfolge in einem String. Sie gibt TRUE zur\u00fcck, wenn die Zeichenfolge gefunden wurde, andernfalls FALSE. <pre><code>string s1 = \"The quick brown fox jumps over the lazy dog\";\nstring s2 = \"fox\";\nbool b = s1.Contains(s2);\nif(b) {\nConsole.WriteLine(\"Found!);\n} else {\nConsole.WriteLine(\"Not found!\");\n}\n</code></pre></p> Output <pre><code>Found!\n</code></pre>"},{"location":"string.html#replace-zeichen-ersetzen","title":"Replace (Zeichen ersetzen)","text":"<p>Die Methode Replace() ersetzt die angegebenen Zeichen bzw. Zeichenfolgen im angegebenen String: <pre><code>string str = \"1 2 3 4 5 6 7 8 9\";\nConsole.WriteLine($\"Original string: \\\"{str}\\\"\");\nstring str2 = str.Replace(' ', ',');\nConsole.WriteLine($\"New string:      \\\"{str}\\\"\");\n</code></pre></p> Output <pre><code>Original string: \"1 2 3 4 5 6 7 8 9\"\nNew string:      \"1,2,3,4,5,6,7,8,9\"\n</code></pre>"},{"location":"string.html#split-string-teilen","title":"Split (String Teilen)","text":"<p>Mit Split() wird ein String am angegebenen Zeichen aufgeteilt. Sie gibt ein Array zur\u00fcck, das die Teile des Strings ohne das Trennzeichen enth\u00e4lt. Das Trennzeichen wird dabei entfernt.</p> ToUpper, ToLower<pre><code>string s = \"You win some. You lose some.\";\nstring[] subs = s.Split(' ');\nConsole.WriteLine($\"Substring: {subs[0]}\");\nConsole.WriteLine($\"Substring: {subs[4]}\");\nConsole.WriteLine($\"Substring: {subs[5]}\");\n</code></pre> Output <pre><code>Substring: You&lt;br&gt;\nSubstring: lose&lt;br&gt;\nSubstring: some.\n</code></pre>"},{"location":"string.html#toupper-tolower-gro-und-kleinbuchstaben","title":"ToUpper, ToLower (Gro\u00df- und Kleinbuchstaben)","text":"<p>Mit den Methoden ToUpper() und ToLower() wird ein String in Gro\u00df- bzw. Kleinbuchstaben umgewandelt:</p> ToUpper, ToLower<pre><code>string karen = \"i wAnT tO sPEak wiTh yOuR mAnaGer\";\nstring upperKaren = karen.ToUpper();\nstring lowerKaren = karen.ToLower();\nConsole.WriteLine($\"Uppercase: {upperKaren}\");\nConsole.WriteLine($\"Lowercase: {lowerKaren}\");\n</code></pre> Output <pre><code>Uppercase: I WANT TO SPEAK WITH YOUR MANAGER\nLowercase: i want to speak with your manager\n</code></pre>"},{"location":"string.html#trim-uberflussige-leerzeichen-entfernen","title":"Trim (\u00dcberfl\u00fcssige Leerzeichen entfernen)","text":"<p>Mit Trim() werden Leerzeichen am Anfang bzw. am Ende entfernt. TrimStart() entfernt Leerzeichen vor dem ersten Zeichen, TrimEnd() entfernt Leerzeichen am Ende. Trim() entfernt die Leerzeichen am Anfang und am Ende.</p> Trim()<pre><code>string whiteSpace = \"    Teststring    \";\nstring trimStart = whiteSpace.TrimStart();\nstring trimEnd = whiteSpace.TrimEnd();\nstring trim = whiteSpace.Trim();\nConsole.WriteLine($\"TrimStart: \\\"{trimStart}\\\"\");\nConsole.WriteLine($\"TrimEnd: \\\"{trimEnd}\\\"\");\nConsole.WriteLine($\"Trim: \\\"{trim}\\\"\");\n</code></pre> Output <pre><code>TrimStart: \"Teststring    \"\nTrimEnd: \"    Teststring\"\nTrim: \"Teststring\"\n</code></pre>"}]}