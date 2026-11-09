# PPJ — quiz Java

Statyczny quiz do przygotowania do kolokwium. Nie wymaga frameworków, backendu ani budowania projektu.

## GitHub Pages

1. Utwórz publiczne repozytorium w GitHub.
2. Wrzuć do katalogu głównego cztery pliki: `index.html`, `styles.css`, `questions.js`, `app.js`.
3. Otwórz **Settings → Pages**.
4. W **Build and deployment** wybierz **Deploy from a branch**, gałąź `main` i folder `/ (root)`, następnie **Save**.
5. Strona będzie dostępna pod `https://TWOJ_LOGIN.github.io/NAZWA_REPO/` (po zakończeniu publikacji).

## Pliki

- `index.html` — szkielet strony
- `styles.css` — wygląd, jasny i ciemny motyw
- `questions.js` — baza pytań (kanoniczne i dodatkowe)
- `app.js` — logika quizu, wyniki, zapis postępu i przełącznik motywu

## Nowe pytania

Dodaj obiekt do tablicy `DB` w `questions.js`:

```js
{
  id: "Q44",
  category: "Tablice jednowymiarowe",
  q: "Treść pytania?",
  opts: ["Odpowiedź A", "Odpowiedź B", "Odpowiedź C", "Odpowiedź D"],
  a: 1, // poprawna odpowiedź: 0=A, 1=B, 2=C, 3=D
  code: "",
  why: "Wyjaśnienie poprawnej odpowiedzi.",
  source: "canonical" // lub "extra"
}
```

Każde `id` musi być unikalne. Zachowaj przecinki pomiędzy obiektami. Dopisanie pytań do pliku automatycznie aktualizuje liczniki i filtry.

## Uwaga o lokalnym otwieraniu

Ponieważ pytania są w `questions.js`, a nie pobierane przez `fetch()`, możesz też otwierać `index.html` bezpośrednio z dysku (protokół `file://`).

Postęp i wybrany motyw zapisują się w `localStorage` konkretnej przeglądarki, nie na koncie GitHub.
