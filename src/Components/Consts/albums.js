const albums=[
    { id: 0, artist: 'محسن چاووشی', album: 'من خود آن سیزده‌ام', sing: 'من خود آن سیزده‌ام' },
    { id: 1, artist: 'محسن چاووشی', album: 'من خود آن سیزده‌ام', sing: 'کجایی' },
    { id: 2, artist: 'محسن چاووشی', album: 'من خود آن سیزده‌ام', sing: 'یارم' },
    { id: 3, artist: 'محسن چاووشی', album: 'من خود آن سیزده‌ام', sing: 'عشق یعنی' },
    { id: 4, artist: 'محسن چاووشی', album: 'من خود آن سیزده‌ام', sing: 'قافله' },

    { id: 5, artist: 'مهدی یغمایی', album: 'درد عشق', sing: 'درد عشق' },
    { id: 6, artist: 'مهدی یغمایی', album: 'درد عشق', sing: 'غریب' },
    { id: 7, artist: 'مهدی یغمایی', album: 'درد عشق', sing: 'نرگس' },
    { id: 8, artist: 'مهدی یغمایی', album: 'درد عشق', sing: 'بازگشت' },

    { id: 9, artist: 'مازیار فلاحی', album: 'چشم‌های تو', sing: 'چشم‌های تو' },
    { id: 10, artist: 'مازیار فلاحی', album: 'چشم‌های تو', sing: 'تو را دوست دارم' },
    { id: 11, artist: 'مازیار فلاحی', album: 'چشم‌های تو', sing: 'بی‌تاب' },
    { id: 12, artist: 'مازیار فلاحی', album: 'چشم‌های تو', sing: 'رفیق' },
    { id: 13, artist: 'مازیار فلاحی', album: 'چشم‌های تو', sing: 'برف' },

    { id: 14, artist: 'علی زند وکیلی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 15, artist: 'علی زند وکیلی', album: 'عاشقانه', sing: 'دیوانه' },
    { id: 16, artist: 'علی زند وکیلی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 17, artist: 'علی زند وکیلی', album: 'عاشقانه', sing: 'بی‌قرار' },
    { id: 18, artist: 'علی زند وکیلی', album: 'عاشقانه', sing: 'کجایی' },

    { id: 19, artist: 'حمید حامی', album: 'دردانه', sing: 'دردانه' },
    { id: 20, artist: 'حمید حامی', album: 'دردانه', sing: 'تو' },
    { id: 21, artist: 'حمید حامی', album: 'دردانه', sing: 'یار من' },
    { id: 22, artist: 'حمید حامی', album: 'دردانه', sing: 'غم' },
    { id: 23, artist: 'حمید حامی', album: 'دردانه', sing: 'دلواپس' },

    { id: 24, artist: 'علیرضا طلیسچی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 25, artist: 'علیرضا طلیسچی', album: 'عاشقانه', sing: 'نفس' },
    { id: 26, artist: 'علیرضا طلیسچی', album: 'عاشقانه', sing: 'آرزو' },
    { id: 27, artist: 'علیرضا طلیسچی', album: 'عاشقانه', sing: 'بی‌قرار' },

    { id: 28, artist: 'حمید عسکری', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 29, artist: 'حمید عسکری', album: 'عاشقانه', sing: 'به یاد تو' },
    { id: 30, artist: 'حمید عسکری', album: 'عاشقانه', sing: 'دلتنگی' },
    { id: 31, artist: 'حمید عسکری', album: 'عاشقانه', sing: 'خواب' },

    { id: 32, artist: 'رضا صادقی', album: 'ساعت ۹', sing: 'ساعت ۹' },
    { id: 33, artist: 'رضا صادقی', album: 'ساعت ۹', sing: 'عزیز' },
    { id: 34, artist: 'رضا صادقی', album: 'ساعت ۹', sing: 'محسن' },
    { id: 35, artist: 'رضا صادقی', album: 'ساعت ۹', sing: 'وای' },

    { id: 36, artist: 'سینا سرلک', album: 'یار', sing: 'یار' },
    { id: 37, artist: 'سینا سرلک', album: 'یار', sing: 'به یاد تو' },
    { id: 38, artist: 'سینا سرلک', album: 'یار', sing: 'درد' },
    { id: 39, artist: 'سینا سرلک', album: 'یار', sing: 'عاشقانه' },

    { id: 40, artist: 'بهنام بانی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 41, artist: 'بهنام بانی', album: 'عاشقانه', sing: 'رنگ عشق' },
    { id: 42, artist: 'بهنام بانی', album: 'عاشقانه', sing: 'دروغ' },
    { id: 43, artist: 'بهنام بانی', album: 'عاشقانه', sing: 'آرزو' },

    { id: 44, artist: 'علی لهراسبی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 45, artist: 'علی لهراسبی', album: 'عاشقانه', sing: 'خواب' },
    { id: 46, artist: 'علی لهراسبی', album: 'عاشقانه', sing: 'فریاد' },
    { id: 47, artist: 'علی لهراسبی', album: 'عاشقانه', sing: 'دلبر' },

    { id: 48, artist: 'سهراب پاکزاد', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 49, artist: 'سهراب پاکزاد', album: 'عاشقانه', sing: 'چشمات' },
    { id: 50, artist: 'سهراب پاکزاد', album: 'عاشقانه', sing: 'یادگاری' },
    { id: 51, artist: 'سهراب پاکزاد', album: 'عاشقانه', sing: 'بی‌تابی' },

    { id: 52, artist: 'مجید خراطها', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 53, artist: 'مجید خراطها', album: 'عاشقانه', sing: 'غریب' },
    { id: 54, artist: 'مجید خراطها', album: 'عاشقانه', sing: 'دروغ' },
    { id: 55, artist: 'مجید خراطها', album: 'عاشقانه', sing: 'خواب' },

    { id: 56, artist: 'علی اصحابی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 57, artist: 'علی اصحابی', album: 'عاشقانه', sing: 'کی بودی' },
    { id: 58, artist: 'علی اصحابی', album: 'عاشقانه', sing: 'دروغ' },
    { id: 59, artist: 'علی اصحابی', album: 'عاشقانه', sing: 'خواب' },

    { id: 60, artist: 'فرزاد فرزین', album: 'عاشقانه', sing: 'دروغ' },
    { id: 61, artist: 'فرزاد فرزین', album: 'عاشقانه', sing: 'دلبر' },
    { id: 62, artist: 'فرزاد فرزین', album: 'عاشقانه', sing: 'آرزو' },
    { id: 63, artist: 'فرزاد فرزین', album: 'عاشقانه', sing: 'یادگار' },

    { id: 64, artist: 'سینا حجازی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 65, artist: 'سینا حجازی', album: 'عاشقانه', sing: 'به یاد تو' },
    { id: 66, artist: 'سینا حجازی', album: 'عاشقانه', sing: 'غریب' },
    { id: 67, artist: 'سینا حجازی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 68, artist: 'مجید رضوی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 69, artist: 'مجید رضوی', album: 'عاشقانه', sing: 'درد' },
    { id: 70, artist: 'مجید رضوی', album: 'عاشقانه', sing: 'خواب' },
    { id: 71, artist: 'مجید رضوی', album: 'عاشقانه', sing: 'دروغ' },

    { id: 72, artist: 'آرمان گرشاسبی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 73, artist: 'آرمان گرشاسبی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 74, artist: 'آرمان گرشاسبی', album: 'عاشقانه', sing: 'غریب' },
    { id: 75, artist: 'آرمان گرشاسبی', album: 'عاشقانه', sing: 'یادگاری' },

    { id: 76, artist: 'امیرعلی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 77, artist: 'امیرعلی', album: 'عاشقانه', sing: 'درد' },
    { id: 78, artist: 'امیرعلی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 79, artist: 'امیرعلی', album: 'عاشقانه', sing: 'یادگار' },

    { id: 80, artist: 'شهاب رمضان', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 81, artist: 'شهاب رمضان', album: 'عاشقانه', sing: 'دروغ' },
    { id: 82, artist: 'شهاب رمضان', album: 'عاشقانه', sing: 'دلبر' },
    { id: 83, artist: 'شهاب رمضان', album: 'عاشقانه', sing: 'یادگاری' },

    { id: 84, artist: 'مهدی احمدوند', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 85, artist: 'مهدی احمدوند', album: 'عاشقانه', sing: 'درد' },
    { id: 86, artist: 'مهدی احمدوند', album: 'عاشقانه', sing: 'یادگار' },
    { id: 87, artist: 'مهدی احمدوند', album: 'عاشقانه', sing: 'دلبر' },

    { id: 88, artist: 'علی یاسینی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 89, artist: 'علی یاسینی', album: 'عاشقانه', sing: 'درد' },
    { id: 90, artist: 'علی یاسینی', album: 'عاشقانه', sing: 'یادگار' },
    { id: 91, artist: 'علی یاسینی', album: 'عاشقانه', sing: 'دلبر' },

    { id: 92, artist: 'سعید آتانی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 93, artist: 'سعید آتانی', album: 'عاشقانه', sing: 'درد' },
    { id: 94, artist: 'سعید آتانی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 95, artist: 'سعید آتانی', album: 'عاشقانه', sing: 'یادگار' },
    { id: 96, artist: 'آرمان', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 97, artist: 'آرمان', album: 'عاشقانه', sing: 'درد' },
    { id: 98, artist: 'آرمان', album: 'عاشقانه', sing: 'دلبر' },
    { id: 99, artist: 'آرمان', album: 'عاشقانه', sing: 'خواب' },

    { id: 100, artist: 'نیما علامه', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 101, artist: 'نیما علامه', album: 'عاشقانه', sing: 'دلبر' },
    { id: 102, artist: 'نیما علامه', album: 'عاشقانه', sing: 'غریب' },
    { id: 103, artist: 'نیما علامه', album: 'عاشقانه', sing: 'یادگار' },

    { id: 104, artist: 'علی مجیدی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 105, artist: 'علی مجیدی', album: 'عاشقانه', sing: 'درد' },
    { id: 106, artist: 'علی مجیدی', album: 'عاشقانه', sing: 'خواب' },
    { id: 107, artist: 'علی مجیدی', album: 'عاشقانه', sing: 'دلبر' },

    { id: 108, artist: 'محمدرضا گلزار', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 109, artist: 'محمدرضا گلزار', album: 'عاشقانه', sing: 'درد' },
    { id: 110, artist: 'محمدرضا گلزار', album: 'عاشقانه', sing: 'یادگار' },
    { id: 111, artist: 'محمدرضا گلزار', album: 'عاشقانه', sing: 'دلبر' },

    { id: 112, artist: 'امیرحسین مقیمی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 113, artist: 'امیرحسین مقیمی', album: 'عاشقانه', sing: 'درد' },
    { id: 114, artist: 'امیرحسین مقیمی', album: 'عاشقانه', sing: 'یادگار' },
    { id: 115, artist: 'امیرحسین مقیمی', album: 'عاشقانه', sing: 'دلبر' },

    { id: 116, artist: 'سید صالح موسوی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 117, artist: 'سید صالح موسوی', album: 'عاشقانه', sing: 'درد' },
    { id: 118, artist: 'سید صالح موسوی', album: 'عاشقانه', sing: 'خواب' },
    { id: 119, artist: 'سید صالح موسوی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 120, artist: 'علی خدابنده', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 121, artist: 'علی خدابنده', album: 'عاشقانه', sing: 'درد' },
    { id: 122, artist: 'علی خدابنده', album: 'عاشقانه', sing: 'یادگار' },
    { id: 123, artist: 'علی خدابنده', album: 'عاشقانه', sing: 'دلبر' },

    { id: 124, artist: 'فرشاد آزادی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 125, artist: 'فرشاد آزادی', album: 'عاشقانه', sing: 'درد' },
    { id: 126, artist: 'فرشاد آزادی', album: 'عاشقانه', sing: 'خواب' },
    { id: 127, artist: 'فرشاد آزادی', album: 'عاشقانه', sing: 'دلبر' },

    { id: 128, artist: 'امیرحسین آرمان', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 129, artist: 'امیرحسین آرمان', album: 'عاشقانه', sing: 'درد' },
    { id: 130, artist: 'امیرحسین آرمان', album: 'عاشقانه', sing: 'یادگار' },
    { id: 131, artist: 'امیرحسین آرمان', album: 'عاشقانه', sing: 'دلبر' },

    { id: 132, artist: 'شهرام شکوهی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 133, artist: 'شهرام شکوهی', album: 'عاشقانه', sing: 'درد' },
    { id: 134, artist: 'شهرام شکوهی', album: 'عاشقانه', sing: 'یادگار' },
    { id: 135, artist: 'شهرام شکوهی', album: 'عاشقانه', sing: 'دلبر' },

    { id: 136, artist: 'علی ستوده', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 137, artist: 'علی ستوده', album: 'عاشقانه', sing: 'درد' },
    { id: 138, artist: 'علی ستوده', album: 'عاشقانه', sing: 'خواب' },
    { id: 139, artist: 'علی ستوده', album: 'عاشقانه', sing: 'دلبر' },

    { id: 140, artist: 'رامین بی باک', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 141, artist: 'رامین بی باک', album: 'عاشقانه', sing: 'درد' },
    { id: 142, artist: 'رامین بی باک', album: 'عاشقانه', sing: 'یادگار' },
    { id: 143, artist: 'رامین بی باک', album: 'عاشقانه', sing: 'دلبر' },
    { id: 144, artist: 'کامران مولایی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 145, artist: 'کامران مولایی', album: 'عاشقانه', sing: 'درد' },
    { id: 146, artist: 'کامران مولایی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 147, artist: 'کامران مولایی', album: 'عاشقانه', sing: 'یادگار' },

    { id: 148, artist: 'نیما رئیسی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 149, artist: 'نیما رئیسی', album: 'عاشقانه', sing: 'درد' },
    { id: 150, artist: 'نیما رئیسی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 151, artist: 'نیما رئیسی', album: 'عاشقانه', sing: 'یادگار' },

    { id: 152, artist: 'سروش قمیشی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 153, artist: 'سروش قمیشی', album: 'عاشقانه', sing: 'درد' },
    { id: 154, artist: 'سروش قمیشی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 155, artist: 'سروش قمیشی', album: 'عاشقانه', sing: 'یادگار' },

    { id: 156, artist: 'مهدی یغمایی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 157, artist: 'مهدی یغمایی', album: 'عاشقانه', sing: 'درد' },
    { id: 158, artist: 'مهدی یغمایی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 159, artist: 'مهدی یغمایی', album: 'عاشقانه', sing: 'یادگار' },

    { id: 160, artist: 'علی پارسا', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 161, artist: 'علی پارسا', album: 'عاشقانه', sing: 'درد' },
    { id: 162, artist: 'علی پارسا', album: 'عاشقانه', sing: 'دلبر' },
    { id: 163, artist: 'علی پارسا', album: 'عاشقانه', sing: 'یادگار' },

    { id: 164, artist: 'حمید عسکری', album: 'دردانه', sing: 'دردانه' },
    { id: 165, artist: 'حمید عسکری', album: 'دردانه', sing: 'آرزو' },
    { id: 166, artist: 'حمید عسکری', album: 'دردانه', sing: 'یادگار' },
    { id: 167, artist: 'حمید عسکری', album: 'دردانه', sing: 'دلبر' },

    { id: 168, artist: 'شادمهر عقیلی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 169, artist: 'شادمهر عقیلی', album: 'عاشقانه', sing: 'درد' },
    { id: 170, artist: 'شادمهر عقیلی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 171, artist: 'شادمهر عقیلی', album: 'عاشقانه', sing: 'یادگار' },
    { id: 172, artist: 'حامد همایون', album: 'دردانه', sing: 'دردانه' },
    { id: 173, artist: 'حامد همایون', album: 'دردانه', sing: 'عاشقانه' },
    { id: 174, artist: 'حامد همایون', album: 'دردانه', sing: 'دلبر' },
    { id: 175, artist: 'حامد همایون', album: 'دردانه', sing: 'یادگار' },

    { id: 176, artist: 'مهرزاد', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 177, artist: 'مهرزاد', album: 'عاشقانه', sing: 'درد' },
    { id: 178, artist: 'مهرزاد', album: 'عاشقانه', sing: 'دلبر' },
    { id: 179, artist: 'مهرزاد', album: 'عاشقانه', sing: 'یادگار' },

    { id: 180, artist: 'ایمان غلامی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 181, artist: 'ایمان غلامی', album: 'عاشقانه', sing: 'درد' },
    { id: 182, artist: 'ایمان غلامی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 183, artist: 'ایمان غلامی', album: 'عاشقانه', sing: 'یادگار' },

    { id: 184, artist: 'سینا درخشنده', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 185, artist: 'سینا درخشنده', album: 'عاشقانه', sing: 'درد' },
    { id: 186, artist: 'سینا درخشنده', album: 'عاشقانه', sing: 'دلبر' },
    { id: 187, artist: 'سینا درخشنده', album: 'عاشقانه', sing: 'یادگار' },

    { id: 188, artist: 'امیررضا', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 189, artist: 'امیررضا', album: 'عاشقانه', sing: 'درد' },
    { id: 190, artist: 'امیررضا', album: 'عاشقانه', sing: 'دلبر' },
    { id: 191, artist: 'امیررضا', album: 'عاشقانه', sing: 'یادگار' },

    { id: 192, artist: 'امیرعباس گلاب', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 193, artist: 'امیرعباس گلاب', album: 'عاشقانه', sing: 'درد' },
    { id: 194, artist: 'امیرعباس گلاب', album: 'عاشقانه', sing: 'دلبر' },
    { id: 195, artist: 'امیرعباس گلاب', album: 'عاشقانه', sing: 'یادگار' },

    { id: 196, artist: 'شایان', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 197, artist: 'شایان', album: 'عاشقانه', sing: 'درد' },
    { id: 198, artist: 'شایان', album: 'عاشقانه', sing: 'دلبر' },
    { id: 199, artist: 'شایان', album: 'عاشقانه', sing: 'یادگار' },
    { id: 200, artist: 'علی لهراسبی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 201, artist: 'علی لهراسبی', album: 'عاشقانه', sing: 'درد' },
    { id: 202, artist: 'علی لهراسبی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 203, artist: 'علی لهراسبی', album: 'عاشقانه', sing: 'یادگار' },

    { id: 204, artist: 'بهنام بانی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 205, artist: 'بهنام بانی', album: 'عاشقانه', sing: 'درد' },
    { id: 206, artist: 'بهنام بانی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 207, artist: 'بهنام بانی', album: 'عاشقانه', sing: 'یادگار' },

    { id: 208, artist: 'علی زند وکیلی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 209, artist: 'علی زند وکیلی', album: 'عاشقانه', sing: 'درد' },
    { id: 210, artist: 'علی زند وکیلی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 211, artist: 'علی زند وکیلی', album: 'عاشقانه', sing: 'یادگار' },

    { id: 212, artist: 'حمید عسکری', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 213, artist: 'حمید عسکری', album: 'عاشقانه', sing: 'درد' },
    { id: 214, artist: 'حمید عسکری', album: 'عاشقانه', sing: 'دلبر' },
    { id: 215, artist: 'حمید عسکری', album: 'عاشقانه', sing: 'یادگار' },

    { id: 216, artist: 'علی یاسینی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 217, artist: 'علی یاسینی', album: 'عاشقانه', sing: 'درد' },
    { id: 218, artist: 'علی یاسینی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 219, artist: 'علی یاسینی', album: 'عاشقانه', sing: 'یادگار' },

    { id: 220, artist: 'امیرحسین مقیمی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 221, artist: 'امیرحسین مقیمی', album: 'عاشقانه', sing: 'درد' },
    { id: 222, artist: 'امیرحسین مقیمی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 223, artist: 'امیرحسین مقیمی', album: 'عاشقانه', sing: 'یادگار' },

    { id: 224, artist: 'شهرام شکوهی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 225, artist: 'شهرام شکوهی', album: 'عاشقانه', sing: 'درد' },
    { id: 226, artist: 'شهرام شکوهی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 227, artist: 'شهرام شکوهی', album: 'عاشقانه', sing: 'یادگار' },

    { id: 228, artist: 'علی خدابنده', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 229, artist: 'علی خدابنده', album: 'عاشقانه', sing: 'درد' },
    { id: 230, artist: 'علی خدابنده', album: 'عاشقانه', sing: 'دلبر' },
    { id: 231, artist: 'علی خدابنده', album: 'عاشقانه', sing: 'یادگار' },
    { id: 232, artist: 'فرزاد فرزین', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 233, artist: 'فرزاد فرزین', album: 'عاشقانه', sing: 'درد' },
    { id: 234, artist: 'فرزاد فرزین', album: 'عاشقانه', sing: 'دلبر' },
    { id: 235, artist: 'فرزاد فرزین', album: 'عاشقانه', sing: 'یادگار' },

    { id: 236, artist: 'محسن ابراهیم‌زاده', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 237, artist: 'محسن ابراهیم‌زاده', album: 'عاشقانه', sing: 'درد' },
    { id: 238, artist: 'محسن ابراهیم‌زاده', album: 'عاشقانه', sing: 'دلبر' },
    { id: 239, artist: 'محسن ابراهیم‌زاده', album: 'عاشقانه', sing: 'یادگار' },

    { id: 240, artist: 'سیروان خسروی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 241, artist: 'سیروان خسروی', album: 'عاشقانه', sing: 'درد' },
    { id: 242, artist: 'سیروان خسروی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 243, artist: 'سیروان خسروی', album: 'عاشقانه', sing: 'یادگار' },

    { id: 244, artist: 'علی عبدالمالکی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 245, artist: 'علی عبدالمالکی', album: 'عاشقانه', sing: 'درد' },
    { id: 246, artist: 'علی عبدالمالکی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 247, artist: 'علی عبدالمالکی', album: 'عاشقانه', sing: 'یادگار' },

    { id: 248, artist: 'رضا صادقی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 249, artist: 'رضا صادقی', album: 'عاشقانه', sing: 'درد' },
    { id: 250, artist: 'رضا صادقی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 251, artist: 'رضا صادقی', album: 'عاشقانه', sing: 'یادگار' },

    { id: 252, artist: 'مهدی مقدم', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 253, artist: 'مهدی مقدم', album: 'عاشقانه', sing: 'درد' },
    { id: 254, artist: 'مهدی مقدم', album: 'عاشقانه', sing: 'دلبر' },
    { id: 255, artist: 'مهدی مقدم', album: 'عاشقانه', sing: 'یادگار' },

    { id: 256, artist: 'آرین بهاری', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 257, artist: 'آرین بهاری', album: 'عاشقانه', sing: 'درد' },
    { id: 258, artist: 'آرین بهاری', album: 'عاشقانه', sing: 'دلبر' },
    { id: 259, artist: 'آرین بهاری', album: 'عاشقانه', sing: 'یادگار' },

    { id: 260, artist: 'مهدی یغمایی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 261, artist: 'مهدی یغمایی', album: 'عاشقانه', sing: 'درد' },
    { id: 262, artist: 'مهدی یغمایی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 263, artist: 'مهدی یغمایی', album: 'عاشقانه', sing: 'یادگار' },
    { id: 264, artist: 'علی ارشدی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 265, artist: 'علی ارشدی', album: 'عاشقانه', sing: 'درد' },
    { id: 266, artist: 'علی ارشدی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 267, artist: 'علی ارشدی', album: 'عاشقانه', sing: 'یادگار' },

    { id: 268, artist: 'سینا شعبانخانی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 269, artist: 'سینا شعبانخانی', album: 'عاشقانه', sing: 'درد' },
    { id: 270, artist: 'سینا شعبانخانی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 271, artist: 'سینا شعبانخانی', album: 'عاشقانه', sing: 'یادگار' },

    { id: 272, artist: 'مهدی احمدوند', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 273, artist: 'مهدی احمدوند', album: 'عاشقانه', sing: 'درد' },
    { id: 274, artist: 'مهدی احمدوند', album: 'عاشقانه', sing: 'دلبر' },
    { id: 275, artist: 'مهدی احمدوند', album: 'عاشقانه', sing: 'یادگار' },

    { id: 276, artist: 'امیرعلی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 277, artist: 'امیرعلی', album: 'عاشقانه', sing: 'درد' },
    { id: 278, artist: 'امیرعلی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 279, artist: 'امیرعلی', album: 'عاشقانه', sing: 'یادگار' },

    { id: 280, artist: 'علی یاسینی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 281, artist: 'علی یاسینی', album: 'عاشقانه', sing: 'درد' },
    { id: 282, artist: 'علی یاسینی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 283, artist: 'علی یاسینی', album: 'عاشقانه', sing: 'یادگار' },

    { id: 284, artist: 'شهاب رمضان', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 285, artist: 'شهاب رمضان', album: 'عاشقانه', sing: 'درد' },
    { id: 286, artist: 'شهاب رمضان', album: 'عاشقانه', sing: 'دلبر' },
    { id: 287, artist: 'شهاب رمضان', album: 'عاشقانه', sing: 'یادگار' },

    { id: 288, artist: 'آرمان گرشاسبی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 289, artist: 'آرمان گرشاسبی', album: 'عاشقانه', sing: 'درد' },
    { id: 290, artist: 'آرمان گرشاسبی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 291, artist: 'آرمان گرشاسبی', album: 'عاشقانه', sing: 'یادگار' },

    { id: 292, artist: 'مجید رضا', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 293, artist: 'مجید رضا', album: 'عاشقانه', sing: 'درد' },
    { id: 294, artist: 'مجید رضا', album: 'عاشقانه', sing: 'دلبر' },
    { id: 295, artist: 'مجید رضا', album: 'عاشقانه', sing: 'یادگار' },
    { id: 296, artist: 'علیرضا طلیسچی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 297, artist: 'علیرضا طلیسچی', album: 'عاشقانه', sing: 'درد' },
    { id: 298, artist: 'علیرضا طلیسچی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 299, artist: 'علیرضا طلیسچی', album: 'عاشقانه', sing: 'یادگار' },

    { id: 300, artist: 'مازیار فلاحی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 301, artist: 'مازیار فلاحی', album: 'عاشقانه', sing: 'درد' },
    { id: 302, artist: 'مازیار فلاحی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 303, artist: 'مازیار فلاحی', album: 'عاشقانه', sing: 'یادگار' },

    { id: 304, artist: 'بهنام صفوی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 305, artist: 'بهنام صفوی', album: 'عاشقانه', sing: 'درد' },
    { id: 306, artist: 'بهنام صفوی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 307, artist: 'بهنام صفوی', album: 'عاشقانه', sing: 'یادگار' },

    { id: 308, artist: 'فرشید ادهمی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 309, artist: 'فرشید ادهمی', album: 'عاشقانه', sing: 'درد' },
    { id: 310, artist: 'فرشید ادهمی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 311, artist: 'فرشید ادهمی', album: 'عاشقانه', sing: 'یادگار' },

    { id: 312, artist: 'آرزو', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 313, artist: 'آرزو', album: 'عاشقانه', sing: 'درد' },
    { id: 314, artist: 'آرزو', album: 'عاشقانه', sing: 'دلبر' },
    { id: 315, artist: 'آرزو', album: 'عاشقانه', sing: 'یادگار' },

    { id: 316, artist: 'سامان جلیلی', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 317, artist: 'سامان جلیلی', album: 'عاشقانه', sing: 'درد' },
    { id: 318, artist: 'سامان جلیلی', album: 'عاشقانه', sing: 'دلبر' },
    { id: 319, artist: 'سامان جلیلی', album: 'عاشقانه', sing: 'یادگار' },

    { id: 320, artist: 'سهراب پاکزاد', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 321, artist: 'سهراب پاکزاد', album: 'عاشقانه', sing: 'درد' },
    { id: 322, artist: 'سهراب پاکزاد', album: 'عاشقانه', sing: 'دلبر' },
    { id: 323, artist: 'سهراب پاکزاد', album: 'عاشقانه', sing: 'یادگار' },

    { id: 324, artist: 'آرین', album: 'عاشقانه', sing: 'عاشقانه' },
    { id: 325, artist: 'آرین', album: 'عاشقانه', sing: 'درد' },
    { id: 326, artist: 'آرین', album: 'عاشقانه', sing: 'دلبر' },
    { id: 327, artist: 'آرین', album: 'عاشقانه', sing: 'یادگار' }



]


export default albums;