/* Baza pytań. Dodaj nowe obiekty do tablicy DB; source: "canonical" lub "extra". */
const DB = [
  {
    "id": "S01",
    "category": "Podstawy i operatory",
    "q": "Która z poniższych deklaracji zmiennych jest NIEPOPRAWNA w Java?",
    "opts": [
      "int liczba = 10;",
      "final double PI = 3.14;",
      "boolean 2isTrue = false;",
      "String _nazwa = \"Java\";"
    ],
    "a": 2,
    "code": "",
    "why": "Identyfikator nie może zaczynać się od cyfry.",
    "source": "canonical"
  },
  {
    "id": "S02",
    "category": "Podstawy i operatory",
    "q": "Jaka będzie wartość zmiennej wynik?",
    "opts": [
      "2.5",
      "2.0",
      "2",
      "Błąd kompilacji"
    ],
    "a": 1,
    "code": "int a = 5;\nint b = 2;\ndouble wynik = a / b;",
    "why": "Dzielenie int przez int obcina część ułamkową, a wynik jest konwertowany do double.",
    "source": "canonical"
  },
  {
    "id": "S03",
    "category": "Podstawy i operatory",
    "q": "Jaki będzie wynik operacji 12 & 7?",
    "opts": [
      "19",
      "5",
      "4",
      "7"
    ],
    "a": 2,
    "code": "",
    "why": "1100 & 0111 = 0100, czyli 4.",
    "source": "canonical"
  },
  {
    "id": "S04",
    "category": "Warunki, pętle i algorytmy",
    "q": "Co wyświetli poniższy kod?",
    "opts": [
      "1",
      "2",
      "3",
      "Błąd kompilacji"
    ],
    "a": 0,
    "code": "int x = 10;\nint y = (x > 5) ? (x < 15) ? 1 : 2 : 3;\nSystem.out.println(y);",
    "why": "Oba warunki są spełnione, więc wybierana jest wartość 1.",
    "source": "canonical"
  },
  {
    "id": "Q02",
    "category": "Warunki, pętle i algorytmy",
    "q": "W jednym łańcuchu if / else if / else dwa warunki są prawdziwe. Która gałąź zostanie wykonana?",
    "opts": [
      "Ostatnia gałąź z prawdziwym warunkiem.",
      "Każda gałąź z prawdziwym warunkiem.",
      "Gałąź else, ponieważ warunki się pokrywają.",
      "Pierwsza gałąź z prawdziwym warunkiem."
    ],
    "a": 3,
    "code": "",
    "why": "W łańcuchu wykonywana jest tylko pierwsza pasująca gałąź.",
    "source": "canonical"
  },
  {
    "id": "Q03",
    "category": "Tablice jednowymiarowe",
    "q": "Szukasz minimum niepustej tablicy int zawierającej dowolne liczby. Od której wartości można bezpiecznie rozpocząć porównywanie?",
    "opts": [
      "Od wartości pierwszego elementu.",
      "Od długości tablicy.",
      "Zawsze od wartości 0.",
      "Od indeksu ostatniego elementu."
    ],
    "a": 0,
    "code": "",
    "why": "Pierwszy element na pewno należy do danych, także gdy wszystkie są dodatnie lub ujemne.",
    "source": "canonical"
  },
  {
    "id": "Q06",
    "category": "Tablice jednowymiarowe",
    "q": "Porządkujesz tablicę int niemalejąco. Który warunek wykrywa, że dwa sąsiednie elementy stoją w złej kolejności?",
    "opts": [
      "arr[i] == arr[i + 1]",
      "i < i + 1",
      "arr[i] > arr[i + 1]",
      "arr[i] < arr[i + 1]"
    ],
    "a": 2,
    "code": "",
    "why": "W porządku niemalejącym lewy element nie powinien być większy od prawego.",
    "source": "canonical"
  },
  {
    "id": "Q07",
    "category": "Podstawy i operatory",
    "q": "Dlaczego poniższa deklaracja nie kompiluje się?",
    "opts": [
      "Typ float przechowuje wyłącznie liczby całkowite.",
      "W literałach Javy trzeba używać przecinka zamiast kropki.",
      "Literał 2.5 ma typ double; przypisanie do float wymaga konwersji.",
      "Wartość 2.5 przekracza zakres typu float."
    ],
    "a": 2,
    "code": "float x = 2.5;",
    "why": "Użyj 2.5f albo (float) 2.5.",
    "source": "canonical"
  },
  {
    "id": "Q08",
    "category": "Warunki, pętle i algorytmy",
    "q": "Lewa strona wyrażenia a && b ma wartość false. Co dzieje się z prawą stroną?",
    "opts": [
      "Jest obliczana; wynik zależy od jej wartości.",
      "Nie jest obliczana; wynik całego wyrażenia to false.",
      "Jest obliczana i musi również mieć wartość false.",
      "Nie jest obliczana; wynik całego wyrażenia to true."
    ],
    "a": 1,
    "code": "",
    "why": "&& używa krótkiego spięcia (short-circuit).",
    "source": "canonical"
  },
  {
    "id": "Q09",
    "category": "Tablice jednowymiarowe",
    "q": "Co oznacza arr.length dla istniejącej tablicy jednowymiarowej?",
    "opts": [
      "Liczbę wszystkich elementów tablicy.",
      "Indeks ostatniego elementu tablicy.",
      "Rozmiar zajmowanej pamięci w bajtach.",
      "Liczbę elementów o wartości różnej od zera."
    ],
    "a": 0,
    "code": "",
    "why": "Indeksy są od 0 do arr.length - 1.",
    "source": "canonical"
  },
  {
    "id": "Q10",
    "category": "Podstawy i operatory",
    "q": "Jaki typ ma wynik dodawania dwóch wartości typu char?",
    "opts": [
      "boolean",
      "int",
      "char",
      "String"
    ],
    "a": 1,
    "code": "",
    "why": "Promocja numeryczna operatora + zamienia char na int.",
    "source": "canonical"
  },
  {
    "id": "Q11",
    "category": "Warunki, pętle i algorytmy",
    "q": "Ile razy podczas jednego wejścia do poniższej pętli wykonywane jest int i = 0?",
    "opts": [
      "Po każdej iteracji pętli.",
      "Przed każdą iteracją pętli.",
      "Dopiero po zakończeniu pętli.",
      "Raz, przed pierwszym sprawdzeniem warunku."
    ],
    "a": 3,
    "code": "for (int i = 0; i < n; i++) { ... }",
    "why": "Inicjalizacja w for wykonywana jest dokładnie raz przy wejściu do pętli.",
    "source": "canonical"
  },
  {
    "id": "Q12",
    "category": "Tablice jednowymiarowe",
    "q": "Tablica arr ma n elementów, a i jest poprawnym indeksem. Który indeks wskazuje element symetryczny względem środka tablicy?",
    "opts": [
      "n - i",
      "i - 1",
      "n + i",
      "n - 1 - i"
    ],
    "a": 3,
    "code": "",
    "why": "Przykładowo dla długości 5 indeks 0 odpowiada 4, a 1 odpowiada 3.",
    "source": "canonical"
  },
  {
    "id": "Q13",
    "category": "Podstawy i operatory",
    "q": "Która deklaracja zmiennej char jest poprawna?",
    "opts": [
      "char znak = true;",
      "char znak = 'AB';",
      "char znak = \"A\";",
      "char znak = 'A';"
    ],
    "a": 3,
    "code": "",
    "why": "Literał char ma pojedynczy znak w apostrofach.",
    "source": "canonical"
  },
  {
    "id": "Q14",
    "category": "Warunki, pętle i algorytmy",
    "q": "W tradycyjnym switch z etykietami case: pominięto break na końcu wybranej gałęzi. Co może się wydarzyć?",
    "opts": [
      "Warunek switch zostanie automatycznie obliczony od nowa.",
      "Program zawsze zakończy się błędem kompilacji.",
      "Switch zawsze zakończy się po wybranej gałęzi.",
      "Wykonanie przejdzie do instrukcji pod kolejną etykietą."
    ],
    "a": 3,
    "code": "",
    "why": "To tzw. fall-through w klasycznym switch.",
    "source": "canonical"
  },
  {
    "id": "Q15",
    "category": "Tablice jednowymiarowe",
    "q": "Tablice x i y przechowują współrzędne tych samych punktów pod tymi samymi indeksami. Jak zamienić kolejność dwóch punktów?",
    "opts": [
      "Zamienić całą tablicę x z całą tablicą y.",
      "Zamienić te same dwa indeksy w obu tablicach.",
      "Posortować każdą tablicę niezależnie.",
      "Zamienić indeksy tylko w tablicy x."
    ],
    "a": 1,
    "code": "",
    "why": "Współrzędne jednego punktu muszą pozostać sparowane.",
    "source": "canonical"
  },
  {
    "id": "Q16",
    "category": "Podstawy i operatory",
    "q": "a i b mają typ int i wartość 1_500_000_000. Który zapis obliczy ich sumę bez przepełnienia int?",
    "opts": [
      "int suma = a + b;",
      "long suma = a + b;",
      "long suma = (long) (a + b);",
      "long suma = (long) a + b;"
    ],
    "a": 3,
    "code": "",
    "why": "Konwersja do long musi nastąpić przed dodawaniem.",
    "source": "canonical"
  },
  {
    "id": "Q17",
    "category": "Warunki, pętle i algorytmy",
    "q": "Która wartość może bezpośrednio pełnić rolę warunku w if, bez porównania ani konwersji?",
    "opts": [
      "Wartość typu boolean.",
      "Dowolny niepusty napis.",
      "Dowolna wartość typu char.",
      "Wartość typu int różna od zera."
    ],
    "a": 0,
    "code": "",
    "why": "Java wymaga wyrażenia typu boolean.",
    "source": "canonical"
  },
  {
    "id": "Q18",
    "category": "Tablice jednowymiarowe",
    "q": "Jak można znaleźć najczęstszą wartość w niepustej tablicy int posortowanej niemalejąco?",
    "opts": [
      "Zliczać długości kolejnych bloków jednakowych wartości.",
      "Wybrać element znajdujący się pośrodku tablicy.",
      "Wybrać element o największej wartości liczbowej.",
      "Obliczyć średnią arytmetyczną elementów tablicy."
    ],
    "a": 0,
    "code": "",
    "why": "Jednakowe wartości stoją obok siebie, można więc mierzyć długości serii.",
    "source": "canonical"
  },
  {
    "id": "Q19",
    "category": "Podstawy i operatory",
    "q": "Co trzeba zrobić przed pierwszym odczytaniem lokalnej zmiennej int zadeklarowanej wewnątrz main?",
    "opts": [
      "Zmienić jej typ na long, aby otrzymała wartość domyślną.",
      "Poczekać, aż Java automatycznie nada jej wartość 0.",
      "Wyświetlić ją raz, aby została zainicjalizowana.",
      "Przypisać jej wartość na każdej drodze prowadzącej do odczytu."
    ],
    "a": 3,
    "code": "",
    "why": "Lokalne zmienne muszą być definite assigned przed odczytem.",
    "source": "canonical"
  },
  {
    "id": "Q20",
    "category": "Warunki, pętle i algorytmy",
    "q": "Czym w poniższym zapisie jest wyrażenie warunek ? a : b?",
    "opts": [
      "Powtarza a, dopóki warunek jest prawdziwy.",
      "Porównuje a i b bez sprawdzania warunku.",
      "Wykonuje zawsze a, a następnie b.",
      "Wybiera wartość a albo b zależnie od warunku."
    ],
    "a": 3,
    "code": "int wynik = warunek ? a : b;",
    "why": "Operator warunkowy wybiera jedną z dwóch wartości.",
    "source": "canonical"
  },
  {
    "id": "Q21",
    "category": "Tablice jednowymiarowe",
    "q": "Co powstaje po poprawnym wykonaniu new int[0]?",
    "opts": [
      "Wartość null zamiast tablicy.",
      "Istniejąca tablica bez elementów.",
      "Tablica o automatycznie dobranej długości.",
      "Tablica z jednym elementem o wartości 0."
    ],
    "a": 1,
    "code": "",
    "why": "Tablica długości 0 jest legalnym obiektem, ale nie można odczytać jej elementu.",
    "source": "canonical"
  },
  {
    "id": "Q22",
    "category": "Podstawy i operatory",
    "q": "Co zmienia zapis 1_000_000 zamiast 1000000 w literale całkowitym?",
    "opts": [
      "Ułatwia czytanie zapisu, zachowując tę samą wartość.",
      "Zmienia liczbę na napis zawierający podkreślenia.",
      "Oznacza zapis liczby w innym systemie liczbowym.",
      "Automatycznie zmienia typ literału z int na long."
    ],
    "a": 0,
    "code": "",
    "why": "Podkreślenia są separatorami wizualnymi cyfr.",
    "source": "canonical"
  },
  {
    "id": "Q23",
    "category": "Warunki, pętle i algorytmy",
    "q": "Dlaczego poniższa pętla wewnętrzna za każdym razem zaczyna od j = 0?",
    "opts": [
      "Warunek j < m przypisuje zmiennej j wartość 0.",
      "Każda zmienna int samoczynnie zeruje się po iteracji.",
      "Jej inicjalizacja wykonuje się przy każdym nowym wejściu do niej.",
      "Zwiększenie i automatycznie zmniejsza j do zera."
    ],
    "a": 2,
    "code": "for (int i = 0; i < n; i++) {\n    for (int j = 0; j < m; j++) { ... }\n}",
    "why": "Za każdym razem tworzona jest nowa zmienna j dla wewnętrznej pętli.",
    "source": "canonical"
  },
  {
    "id": "Q24",
    "category": "Tablice jednowymiarowe",
    "q": "Dlaczego poniższy kod zwykle nie zamienia miejscami dwóch różnych wartości?",
    "opts": [
      "Java wykonuje obie instrukcje jednocześnie.",
      "Zmiana wartości elementu zmienia również jego indeks.",
      "Pierwsze przypisanie nadpisuje wartość potrzebną w drugim.",
      "Przypisanie nie może zmienić elementu tablicy int."
    ],
    "a": 2,
    "code": "arr[i] = arr[j];\narr[j] = arr[i];",
    "why": "Należy użyć tymczasowej zmiennej, np. int temp = arr[i].",
    "source": "canonical"
  },
  {
    "id": "Q25",
    "category": "Podstawy i operatory",
    "q": "Kiedy pojedynczy bit wyniku operacji XOR (^) na liczbach całkowitych ma wartość 1?",
    "opts": [
      "Gdy odpowiadające sobie bity argumentów są różne.",
      "Gdy oba odpowiadające sobie bity mają wartość 0.",
      "Gdy oba odpowiadające sobie bity mają wartość 1.",
      "Gdy przynajmniej jeden z tych bitów ma wartość 1."
    ],
    "a": 0,
    "code": "",
    "why": "XOR daje 1 tylko dla 0^1 lub 1^0.",
    "source": "canonical"
  },
  {
    "id": "Q26",
    "category": "Warunki, pętle i algorytmy",
    "q": "Warunek pętli while przy pierwszym sprawdzeniu ma wartość false. Ile razy wykona się jej ciało?",
    "opts": [
      "Dokładnie raz.",
      "Dokładnie dwa razy.",
      "Ani razu.",
      "Będzie wykonywać się bez końca."
    ],
    "a": 2,
    "code": "",
    "why": "while sprawdza warunek przed wykonaniem ciała.",
    "source": "canonical"
  },
  {
    "id": "Q27",
    "category": "Tablice jednowymiarowe",
    "q": "Które wyrażenie pozwala otrzymać liczby całkowite od 1 do 10 włącznie przy użyciu Math.random()?",
    "opts": [
      "(int) Math.random() * 10 + 1",
      "(int) (Math.random() * 11) + 1",
      "(int) (Math.random() * 10) + 1",
      "(int) (Math.random() * 10)"
    ],
    "a": 2,
    "code": "",
    "why": "Math.random() zwraca liczbę od 0.0 (włącznie) do 1.0 (bez 1.0).",
    "source": "canonical"
  },
  {
    "id": "Q28",
    "category": "Podstawy i operatory",
    "q": "Który opis operatorów = oraz == dla zmiennych int jest poprawny?",
    "opts": [
      "= porównuje wartości, a == przypisuje wartość.",
      "Oba operatory porównują wartości.",
      "= przypisuje wartość, a == porównuje wartości.",
      "Oba operatory przypisują wartość."
    ],
    "a": 2,
    "code": "",
    "why": "Przypisanie to =, porównanie równości to ==.",
    "source": "canonical"
  },
  {
    "id": "Q29",
    "category": "Warunki, pętle i algorytmy",
    "q": "W algorytmie Euklidesa z odejmowaniem zaczynamy od dwóch dodatnich liczb całkowitych. Co oznacza osiągnięcie a == b?",
    "opts": [
      "Szukanym NWD jest suma a + b.",
      "Wspólna wartość a i b jest szukanym NWD.",
      "Szukanym NWD jest iloczyn a * b.",
      "Trzeba odejmować dalej, aż obie liczby będą zerami."
    ],
    "a": 1,
    "code": "",
    "why": "Równe wartości to wynik NWD w algorytmie odejmowania.",
    "source": "canonical"
  },
  {
    "id": "Q30",
    "category": "Tablice jednowymiarowe",
    "q": "Dlaczego rozpoczęcie szukania maksimum od max = 0 jest błędne dla niepustej tablicy z samymi ujemnymi liczbami?",
    "opts": [
      "Żaden element nie zastąpi 0, choć 0 nie należy do danych.",
      "Każda ujemna liczba zostanie automatycznie zamieniona na 0.",
      "Porównywanie liczb ujemnych operatorem > jest niedozwolone.",
      "Zero jest zawsze mniejsze od każdej liczby ujemnej."
    ],
    "a": 0,
    "code": "",
    "why": "Inicjalizuj max pierwszym elementem tablicy.",
    "source": "canonical"
  },
  {
    "id": "Q31",
    "category": "Podstawy i operatory",
    "q": "Jak działa /, gdy oba argumenty mają typ int, dzielnik jest różny od 0, a wynik mieści się w int?",
    "opts": [
      "Daje iloraz całkowity z odrzuceniem części ułamkowej w stronę zera.",
      "Zawsze zaokrągla iloraz w dół, także dla liczb ujemnych.",
      "Daje wynik double z zachowaniem części ułamkowej.",
      "Zaokrągla iloraz do najbliższej liczby całkowitej."
    ],
    "a": 0,
    "code": "",
    "why": "Przykładowo -7 / 2 to -3, a nie -4.",
    "source": "canonical"
  },
  {
    "id": "Q32",
    "category": "Warunki, pętle i algorytmy",
    "q": "Jak objąć kilka instrukcji jednym warunkiem if?",
    "opts": [
      "Nadać im takie samo wcięcie bez nawiasów.",
      "Umieścić je we wspólnym bloku { } po if.",
      "Dodać średnik bezpośrednio po warunku if.",
      "Rozdzielić je przecinkami zamiast średnikami."
    ],
    "a": 1,
    "code": "",
    "why": "Klamry tworzą blok instrukcji.",
    "source": "canonical"
  },
  {
    "id": "Q33",
    "category": "Tablice jednowymiarowe",
    "q": "arr jest istniejącą tablicą o długości n. Co się stanie przy wykonaniu odczytu arr[n]?",
    "opts": [
      "Zostanie odczytany ostatni element tablicy.",
      "Wystąpi wyjątek z powodu indeksu poza zakresem.",
      "Tablica powiększy się automatycznie o jeden element.",
      "Zostanie odczytana domyślna wartość 0."
    ],
    "a": 1,
    "code": "",
    "why": "Ostatni indeks to n - 1; arr[n] powoduje ArrayIndexOutOfBoundsException.",
    "source": "canonical"
  },
  {
    "id": "Q34",
    "category": "Podstawy i operatory",
    "q": "a i b są zmiennymi typu byte. Jaki typ ma wyrażenie a + b?",
    "opts": [
      "int",
      "long",
      "short",
      "byte"
    ],
    "a": 0,
    "code": "",
    "why": "Promocja numeryczna operacji arytmetycznych daje int.",
    "source": "canonical"
  },
  {
    "id": "Q35",
    "category": "Warunki, pętle i algorytmy",
    "q": "Kiedy w zwykłej pętli for wykonuje się część aktualizacyjna, np. i++, jeśli ciało kończy się normalnie?",
    "opts": [
      "Przed pierwszym sprawdzeniem warunku pętli.",
      "Tylko jeden raz po zakończeniu całej pętli.",
      "Po ciele pętli, przed kolejnym sprawdzeniem warunku.",
      "Między sprawdzeniem warunku a ciałem pętli."
    ],
    "a": 2,
    "code": "",
    "why": "Kolejność: inicjalizacja → warunek → ciało → aktualizacja → warunek...",
    "source": "canonical"
  },
  {
    "id": "Q36",
    "category": "Tablice jednowymiarowe",
    "q": "Tablica int jest niepusta i posortowana niemalejąco. Licznik różnych wartości zaczyna od 1. Kiedy należy go zwiększać, idąc od indeksu 1?",
    "opts": [
      "Gdy bieżący element jest liczbą dodatnią.",
      "Gdy bieżący element jest równy poprzedniemu.",
      "Gdy bieżący indeks jest większy od 0.",
      "Gdy bieżący element różni się od poprzedniego."
    ],
    "a": 3,
    "code": "",
    "why": "Każda nowa wartość pojawia się na granicy dwóch różnych sąsiadów.",
    "source": "canonical"
  },
  {
    "id": "Q37",
    "category": "Podstawy i operatory",
    "q": "Co robi rzutowanie skończonej wartości double na int, gdy wartość mieści się w zakresie int?",
    "opts": [
      "Zawsze zaokrągla w dół.",
      "Odrzuca część ułamkową, zaokrąglając w stronę zera.",
      "Zawsze zaokrągla w górę.",
      "Zaokrągla do najbliższej liczby całkowitej."
    ],
    "a": 1,
    "code": "",
    "why": "(int) -2.9 to -2.",
    "source": "canonical"
  },
  {
    "id": "Q38",
    "category": "Warunki, pętle i algorytmy",
    "q": "n jest dodatnią liczbą typu int zapisaną dziesiętnie. Co oznaczają n % 10 i n / 10 w algorytmie przetwarzającym jej cyfry?",
    "opts": [
      "Odpowiednio: ostatnią cyfrę i liczbę bez ostatniej cyfry.",
      "Odpowiednio: liczbę cyfr i sumę wszystkich cyfr.",
      "Odpowiednio: sumę cyfr i iloczyn wszystkich cyfr.",
      "Odpowiednio: pierwszą cyfrę i liczbę bez pierwszej cyfry."
    ],
    "a": 0,
    "code": "",
    "why": "Np. 1234 % 10 = 4, a 1234 / 10 = 123.",
    "source": "canonical"
  },
  {
    "id": "Q39",
    "category": "Tablice jednowymiarowe",
    "q": "Co robi sama deklaracja lokalna int[] arr;?",
    "opts": [
      "Tworzy pustą tablicę o długości 0.",
      "Tworzy tablicę o dowolnie rosnącej długości.",
      "Deklaruje zmienną tablicową, ale nie tworzy tablicy.",
      "Tworzy tablicę z jednym elementem równym 0."
    ],
    "a": 2,
    "code": "",
    "why": "Tablicę tworzy np. new int[5].",
    "source": "canonical"
  },
  {
    "id": "Q40",
    "category": "Podstawy i operatory",
    "q": "Co oznacza sufiks L w poprawnym literale całkowitym, np. 3_000_000_000L?",
    "opts": [
      "Literał ma typ double.",
      "Literał ma typ long.",
      "Liczba jest przechowywana jako napis.",
      "Liczba jest zapisana szesnastkowo."
    ],
    "a": 1,
    "code": "",
    "why": "L (lub l) oznacza long; preferowane jest wielkie L.",
    "source": "canonical"
  },
  {
    "id": "Q41",
    "category": "Warunki, pętle i algorytmy",
    "q": "Jak działa wybrana gałąź case ... -> w switch expression?",
    "opts": [
      "Oblicza swój wynik bez automatycznego przejścia do kolejnej gałęzi.",
      "Powtarza się do chwili, gdy warunek case będzie fałszywy.",
      "Wymaga break po każdej gałęzi zwracającej wartość.",
      "Oblicza wyniki wszystkich kolejnych gałęzi."
    ],
    "a": 0,
    "code": "",
    "why": "Składnia strzałkowa nie ma klasycznego fall-through.",
    "source": "canonical"
  },
  {
    "id": "Q42",
    "category": "Tablice jednowymiarowe",
    "q": "Tablica a jest uporządkowana rosnąco, a b malejąco. Obie są niepuste. Od których końców zacząć ich scalanie do tablicy rosnącej?",
    "opts": [
      "Od początku a i od początku b.",
      "Od początku a i od końca b.",
      "Od końca a i od końca b.",
      "Od końca a i od początku b."
    ],
    "a": 1,
    "code": "",
    "why": "Najmniejsze wartości są z przodu a i z tyłu b.",
    "source": "canonical"
  },
  {
    "id": "Q43",
    "category": "Podstawy i operatory",
    "q": "Kiedy pojedynczy bit wyniku operacji OR (|) na liczbach całkowitych ma wartość 1?",
    "opts": [
      "Tylko gdy odpowiadające sobie bity są różne.",
      "Tylko gdy oba odpowiadające sobie bity mają wartość 0.",
      "Gdy co najmniej jeden z odpowiadających sobie bitów ma wartość 1.",
      "Tylko gdy oba odpowiadające sobie bity mają wartość 1."
    ],
    "a": 2,
    "code": "",
    "why": "OR daje 0 tylko dla pary 0 i 0.",
    "source": "canonical"
  },
  {
    "id": "E01",
    "category": "Podstawy i operatory",
    "q": "Co wyświetli program?",
    "opts": [
      "7",
      "7.0",
      "7.5",
      "Błąd kompilacji"
    ],
    "a": 1,
    "code": "double x = 15 / 2;\nSystem.out.println(x);",
    "why": "15 / 2 oblicza int 7, następnie zapisuje 7.0 w double.",
    "source": "extra"
  },
  {
    "id": "E02",
    "category": "Podstawy i operatory",
    "q": "Jaki typ ma literał 4.0f?",
    "opts": [
      "double",
      "float",
      "int",
      "long"
    ],
    "a": 1,
    "code": "",
    "why": "Sufiks f oznacza float.",
    "source": "extra"
  },
  {
    "id": "E03",
    "category": "Podstawy i operatory",
    "q": "Co wyświetli kod?",
    "opts": [
      "3",
      "4",
      "5",
      "Błąd kompilacji"
    ],
    "a": 1,
    "code": "int x = 3;\nSystem.out.println(++x);",
    "why": "Preinkrementacja podnosi wartość przed jej użyciem.",
    "source": "extra"
  },
  {
    "id": "E04",
    "category": "Podstawy i operatory",
    "q": "Co wyświetli kod?",
    "opts": [
      "3",
      "4",
      "5",
      "Błąd kompilacji"
    ],
    "a": 0,
    "code": "int x = 3;\nSystem.out.println(x++);",
    "why": "Postinkrementacja zwraca poprzednią wartość.",
    "source": "extra"
  },
  {
    "id": "E05",
    "category": "Podstawy i operatory",
    "q": "Wynik wyrażenia 9 ^ 5 (XOR) to:",
    "opts": [
      "12",
      "14",
      "4",
      "0"
    ],
    "a": 0,
    "code": "",
    "why": "1001 ^ 0101 = 1100 (12).",
    "source": "extra"
  },
  {
    "id": "E06",
    "category": "Podstawy i operatory",
    "q": "Która deklaracja jest poprawna?",
    "opts": [
      "int class = 4;",
      "long x = 8L;",
      "boolean x = 0;",
      "float x = 1.5;"
    ],
    "a": 1,
    "code": "",
    "why": "class to słowo kluczowe, boolean nie przyjmuje 0, a 1.5 to double.",
    "source": "extra"
  },
  {
    "id": "E07",
    "category": "Podstawy i operatory",
    "q": "Jaki będzie wynik?",
    "opts": [
      "-3",
      "-4",
      "-3.5",
      "Błąd kompilacji"
    ],
    "a": 0,
    "code": "System.out.println(-7 / 2);",
    "why": "Dzielenie całkowite zaokrągla w kierunku zera.",
    "source": "extra"
  },
  {
    "id": "E08",
    "category": "Podstawy i operatory",
    "q": "Co wypisze program?",
    "opts": [
      "true",
      "false",
      "1",
      "Błąd kompilacji"
    ],
    "a": 0,
    "code": "int a = 4;\nSystem.out.println(a >= 4 && a < 10);",
    "why": "Obydwa warunki są prawdziwe.",
    "source": "extra"
  },
  {
    "id": "E09",
    "category": "Podstawy i operatory",
    "q": "Wynik operacji 6 << 1 to:",
    "opts": [
      "3",
      "6",
      "12",
      "7"
    ],
    "a": 2,
    "code": "",
    "why": "Przesunięcie 0110 o jeden bit w lewo daje 1100 (12).",
    "source": "extra"
  },
  {
    "id": "E10",
    "category": "Podstawy i operatory",
    "q": "Co wypisze program?",
    "opts": [
      "AB3",
      "AB12",
      "AB",
      "Błąd kompilacji"
    ],
    "a": 1,
    "code": "System.out.println(\"AB\" + 1 + 2);",
    "why": "Łączenie napisów jest wykonywane od lewej.",
    "source": "extra"
  },
  {
    "id": "E11",
    "category": "Warunki, pętle i algorytmy",
    "q": "Ile razy wykona się ciało?",
    "opts": [
      "0",
      "1",
      "2",
      "3"
    ],
    "a": 2,
    "code": "for (int i = 1; i < 5; i += 2) {\n    System.out.print(i);\n}",
    "why": "i przyjmuje wartości 1 i 3.",
    "source": "extra"
  },
  {
    "id": "E12",
    "category": "Warunki, pętle i algorytmy",
    "q": "Co wyświetli kod?",
    "opts": [
      "A",
      "B",
      "AB",
      "Nic"
    ],
    "a": 1,
    "code": "int n = 4;\nif (n < 3) System.out.print(\"A\");\nelse System.out.print(\"B\");",
    "why": "Pierwszy warunek jest fałszywy.",
    "source": "extra"
  },
  {
    "id": "E13",
    "category": "Warunki, pętle i algorytmy",
    "q": "Ile razy wykona się ciało pętli do-while, jeśli warunek od początku jest false?",
    "opts": [
      "0",
      "1",
      "2",
      "Nieskończenie wiele"
    ],
    "a": 1,
    "code": "",
    "why": "do-while sprawdza warunek po pierwszym wykonaniu ciała.",
    "source": "extra"
  },
  {
    "id": "E14",
    "category": "Warunki, pętle i algorytmy",
    "q": "Jaka będzie wartość sumy?",
    "opts": [
      "6",
      "10",
      "15",
      "Błąd kompilacji"
    ],
    "a": 1,
    "code": "int suma = 0;\nfor (int i = 1; i <= 4; i++) suma += i;",
    "why": "1+2+3+4 = 10.",
    "source": "extra"
  },
  {
    "id": "E15",
    "category": "Warunki, pętle i algorytmy",
    "q": "Co zrobi break wewnątrz pojedynczej pętli for?",
    "opts": [
      "Przejdzie do kolejnej iteracji.",
      "Zakończy bieżącą pętlę.",
      "Zrestartuje pętlę.",
      "Zakończy program."
    ],
    "a": 1,
    "code": "",
    "why": "break przerywa najbliższą pętlę lub switch.",
    "source": "extra"
  },
  {
    "id": "E16",
    "category": "Warunki, pętle i algorytmy",
    "q": "Co zrobi continue w pętli for?",
    "opts": [
      "Zakończy program.",
      "Wyjdzie z całej pętli.",
      "Przejdzie do aktualizacji, a następnie następnej iteracji.",
      "Cofnie licznik do zera."
    ],
    "a": 2,
    "code": "",
    "why": "continue pomija resztę ciała bieżącej iteracji.",
    "source": "extra"
  },
  {
    "id": "E17",
    "category": "Warunki, pętle i algorytmy",
    "q": "Co wyświetli kod?",
    "opts": [
      "A",
      "B",
      "C",
      "Błąd kompilacji"
    ],
    "a": 1,
    "code": "int n = 2;\nswitch (n) {\n case 1: System.out.print(\"A\"); break;\n case 2: System.out.print(\"B\"); break;\n default: System.out.print(\"C\");\n}",
    "why": "Wybrany jest case 2, a break kończy switch.",
    "source": "extra"
  },
  {
    "id": "E18",
    "category": "Warunki, pętle i algorytmy",
    "q": "Co wyświetli kod?",
    "opts": [
      "1",
      "2",
      "3",
      "0"
    ],
    "a": 2,
    "code": "int a = 2;\nint b = (a > 4) ? 1 : ((a == 2) ? 3 : 0);\nSystem.out.println(b);",
    "why": "Pierwszy warunek jest fałszywy, a drugi prawdziwy.",
    "source": "extra"
  },
  {
    "id": "E19",
    "category": "Warunki, pętle i algorytmy",
    "q": "Które wyrażenie poprawnie sprawdza, czy x jest w przedziale [1, 10]?",
    "opts": [
      "1 <= x <= 10",
      "x >= 1 && x <= 10",
      "x >= 1 || x <= 10",
      "x > 1 && x > 10"
    ],
    "a": 1,
    "code": "",
    "why": "Potrzebne są dwa porównania połączone &&.",
    "source": "extra"
  },
  {
    "id": "E20",
    "category": "Warunki, pętle i algorytmy",
    "q": "Co wyświetli kod?",
    "opts": [
      "0",
      "1",
      "2",
      "3"
    ],
    "a": 0,
    "code": "int x = 0;\nwhile (x > 0) { x++; }\nSystem.out.println(x);",
    "why": "Warunek od razu jest false.",
    "source": "extra"
  },
  {
    "id": "E21",
    "category": "Tablice jednowymiarowe",
    "q": "Jaki jest ostatni poprawny indeks tablicy utworzonej przez new int[8]?",
    "opts": [
      "8",
      "7",
      "0",
      "9"
    ],
    "a": 1,
    "code": "",
    "why": "Indeksy są od 0 do 7.",
    "source": "extra"
  },
  {
    "id": "E22",
    "category": "Tablice jednowymiarowe",
    "q": "Co wyświetli program?",
    "opts": [
      "0",
      "3",
      "6",
      "Błąd kompilacji"
    ],
    "a": 2,
    "code": "int[] a = {2, 4, 6};\nSystem.out.println(a[2]);",
    "why": "Indeks 2 oznacza trzeci element.",
    "source": "extra"
  },
  {
    "id": "E23",
    "category": "Tablice jednowymiarowe",
    "q": "Jaka jest wartość elementu nowej tablicy int przed ręcznym przypisaniem?",
    "opts": [
      "null",
      "1",
      "0",
      "Nieokreślona"
    ],
    "a": 2,
    "code": "",
    "why": "Elementy tablicy int są automatycznie inicjalizowane zerami.",
    "source": "extra"
  },
  {
    "id": "E24",
    "category": "Tablice jednowymiarowe",
    "q": "Który warunek jest poprawny dla iterowania po wszystkich elementach tablicy?",
    "opts": [
      "i <= arr.length",
      "i < arr.length",
      "i < arr.length - 1",
      "i == arr.length"
    ],
    "a": 1,
    "code": "for (int i = 0; /* warunek */; i++) { ... }",
    "why": "Przy indeksowaniu od zera ostatni element to length - 1.",
    "source": "extra"
  },
  {
    "id": "E25",
    "category": "Tablice jednowymiarowe",
    "q": "Co wyświetli poniższy kod?",
    "opts": [
      "2",
      "3",
      "5",
      "Błąd kompilacji"
    ],
    "a": 1,
    "code": "int[] a = {4, 7, 9};\nSystem.out.println(a.length);",
    "why": "W tablicy są trzy elementy.",
    "source": "extra"
  },
  {
    "id": "E26",
    "category": "Tablice jednowymiarowe",
    "q": "Jak najprościej poprawnie zainicjalizować maksimum niepustej tablicy?",
    "opts": [
      "int max = 0;",
      "int max = arr.length;",
      "int max = arr[0];",
      "int max = -1;"
    ],
    "a": 2,
    "code": "",
    "why": "Pierwsza wartość gwarantuje poprawność także dla liczb ujemnych.",
    "source": "extra"
  },
  {
    "id": "E27",
    "category": "Tablice jednowymiarowe",
    "q": "Jak poprawnie zamienić arr[i] z arr[j]?",
    "opts": [
      "arr[i] = arr[j]; arr[j] = arr[i];",
      "int t = arr[i]; arr[i] = arr[j]; arr[j] = t;",
      "arr[i] += arr[j];",
      "arr[i] = arr[i];"
    ],
    "a": 1,
    "code": "",
    "why": "Zmienna pomocnicza chroni nadpisywaną wartość.",
    "source": "extra"
  },
  {
    "id": "E28",
    "category": "Tablice jednowymiarowe",
    "q": "Jakie wartości będzie mieć tablica po wykonaniu instrukcji?",
    "opts": [
      "{1, 2}",
      "{2, 1}",
      "{2, 2}",
      "{1, 1}"
    ],
    "a": 2,
    "code": "int[] a = {1, 2};\na[0] = a[1];",
    "why": "Zmienia się pierwszy element na 2.",
    "source": "extra"
  },
  {
    "id": "E29",
    "category": "Tablice jednowymiarowe",
    "q": "Ile porównań sąsiednich par można wykonać w jednym pełnym przebiegu tablicy długości n?",
    "opts": [
      "n + 1",
      "n",
      "n - 1",
      "n * n"
    ],
    "a": 2,
    "code": "",
    "why": "Pary to (0,1), (1,2), ..., (n-2,n-1).",
    "source": "extra"
  },
  {
    "id": "E30",
    "category": "Tablice jednowymiarowe",
    "q": "Które wyrażenie sprawdza, czy sąsiednie elementy posortowanej rosnąco tablicy są różne?",
    "opts": [
      "arr[i] != arr[i-1]",
      "arr[i] == arr[i-1]",
      "arr[i] > arr.length",
      "i != arr[i]"
    ],
    "a": 0,
    "code": "",
    "why": "Porównujemy wartości dwóch sąsiadów, przy i >= 1.",
    "source": "extra"
  }
];
