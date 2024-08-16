document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('text-form');
    const result = document.getElementById('result');
    const copyBtn = document.getElementById('copy-btn');
    const pasteBtn = document.getElementById('paste-btn');
    const clearBtn = document.getElementById('clear-btn');
    const inputField = document.getElementById('input-text');

    // تحديد التبديلات باستخدام كائن
    const replacements = {
        '`': 'ذ',
        'q': 'ض',
        'w': 'ص',
        'e': 'ث',
        'r': 'ق',
        't': 'ف',
        'y': 'غ',
        'u': 'ع',
        'i': 'ه',
        'o': 'خ',
        'p': 'ح',
        '[': 'ج',
        ']': 'د',
        'a': 'ش',
        's': 'س',
        'd': 'ي',
        'f': 'ب',
        'g': 'ل',
        'h': 'ا',
        'j': 'ت',
        'k': 'ن',
        'l': 'م',
        ';': 'ك',
        'z': 'ئ',
        'x': 'ء',
        'c': 'ؤ',
        'v': 'ر',
        'b': 'لا',
        'n': 'ى',
        'm': 'ة',
        ',': 'و',
        '.': 'ز',
        '/': 'ظ',
        "'": 'ك',
        '~': 'ّ',
        'Q': 'َ',
        'W': 'ً',
        'E': 'ُ',
        'R': 'ٌ',
        'T': 'لإ',
        'Y': 'إ',
        'U': '‘',
        'I': '÷',
        'O': '×',
        'P': '؛',
        '{': '<',
        '}': '>',
        'A': 'ِ',
        'S': 'ٍ',
        'D': ']',
        'F': '[',
        'G': 'لأ',
        'H': 'أ',
        'J': 'ـ',
        'K': '،',
        'L': '/',
        ';': ':',
        "'": '"',
        'Z': '~',
        'X': 'ْ',
        'C': '}',
        'V': '{',
        'B': 'لآ',
        'N': 'آ',
        'M': '’',
        '<': ',',
        '>': '.',
        '?': '؟',
        // أضف المزيد من التبديلات هنا
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // منع إعادة تحميل الصفحة عند تقديم النموذج

        const inputText = inputField.value;
        const transformedText = transformText(inputText, replacements);
        result.textContent = transformedText;
    });

    copyBtn.addEventListener('click', () => {
        if (result.textContent) {
            navigator.clipboard.writeText(result.textContent).then(() => {
                alert('تم نسخ النص إلى الحافظة!');
            }).catch(err => {
                console.error('فشل في نسخ النص: ', err);
            });
        } else {
            alert('لا يوجد نص لنسخه!');
        }
    });

    pasteBtn.addEventListener('click', () => {
        navigator.clipboard.readText().then(text => {
            inputField.value = text;
        }).catch(err => {
            console.error('فشل في لصق النص: ', err);
        });
    });

    clearBtn.addEventListener('click', () => {
        inputField.value = '';
        result.textContent = '';
    });

    function transformText(text, replacements) {
        let transformed = "";

        for (let char of text) {
            if (replacements.hasOwnProperty(char)) {
                transformed += replacements[char];
            } else {
                transformed += char; // إذا لم يكن الحرف موجودًا في التبديلات، أتركه كما هو
            }
        }

        return transformed;
    }
});
