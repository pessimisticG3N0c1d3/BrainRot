  var selectedSubject = "";
    var selectedTopic = "";
    var questions = {
      "General science": [
	    { question: "Which element is the lightest noble gas?", answer: "Helium", answer: "helium" },
        { question: "What is the most abundant element in the universe by mass?", answer: "Hydrogen", answer: "hydrogen" },
        { question: "Which element is a liquid at room temperature?", answer: "Mercury", answer: "mercury" },
        { question: "Which two elements are the main components of air?",answer: "nitrogen and oxygen", answer: "Nitrogen and Oxygen" },
        { question: "What is the name of the element that is brittle and used in pencils?", answer: "graphite" , answer: "Graphite" },
        { question: "What element is essential for human blood and carries oxygen throughout the body?", answer: "iron", answer: "Iron" },
        { question: "What element is used in pencils (graphite) and is one of the few nonmetals that conducts electricity?", answer: "Carbon", answer:"carbon" },
        { question: "What element is the main component of diamonds and the hardest natural substance known?", answer: "Carbon", answer: "carbon" },
		{ question: "What are the elements in Group 2 called?", answer: "Alkaline earth metals", answer: "alkaline earth metals" },
		{ question: "Which element is the most abundant metal in the Earth's crust?", answer: "Aluminum ", answer: "aluminum "},
		{ question: "Which element has the highest melting point?", answer: "Tungsten", answer: "tungsten", },
		{ question: "What is the lightest element that is a gas at room temperature?", answer: "Hydrogen", answer: "hydrogen " },
		{ question: "Which element has the highest electronegativity?", answer: "Fluorine", answer: "fluorine" },
		{ question: "What is the name of the lanthanide series of elements?", answer: "Rare earth elements",answer:"rare earth elements" },
		{ question: "Which element is commonly used in batteries?", answer: "Lithium",answer: "lithium" },
		{ question: "What is the name of the group 17 elements?", answer: "Halogens",answer: "halogens" },
		{ question: "Which element is found in all organic compounds?", answer: "Halogens", answer: "halogens" },
		{ question: "What is the lightest metal?", answer: "Lithium",answer: "lithium" },
		{ question: "Which element has the highest atomic number?", answer: "Oganesson",answer: "oganesson" },
		{ question: "What is the most reactive nonmetal?", answer: "Fluorine",answer: "fluorine" },
        { question: "What is the powerhouse of the cell?", answer: "Mitochondria",answer: "mitochondria" },
        { question: "What is the process by which plants make their own food?", answer: "Photosynthesis",answer: "photosynthesis" },
        { question: "What is the basic unit of life?", answer: "Cell", answer: "cell" },
        { question: "What is the molecule that carries genetic information?", answer: "DNA", answer: "dna"},
        { question: "What is the study of heredity and variation in organisms?", answer: "Genetics", answer: "genetics" },
		{ question: "What is the process by which organisms maintain a stable internal environment?", answer: "Homeostasis", answer: "homeostasis" },
        { question: "What is the organ responsible for pumping blood in the body?", answer: "Heart",answer: "heart" },
        { question: "What is the largest organ in the human body?", answer: "Skin", answer: "skin" },
        { question: "What is the name of the process by which cells divide to form new cells?", answer: "Mitosis", answer: "mitosis"  },
        { question: "What is the scientific name for humans?", answer: "Homo Sapien",answer: "homo sapien",answer: "Homo sapien",answer: "homo Sapien" },
        { question: "What are the structures that control what enters and leaves the cell?", answer: "Cell membrane",answer:"cell membrane", answer:"Cell Membrane" },
        { question: "What structures within the cell contain genetic material (DNA)?", answer: "Chromosomes",answer: "Chromosome",answer: "chromosomes",answer: "chromosome" },
		{ question: "What molecule is the building block of proteins?",answer:"Amnino acids",answer:"amnino acids",answer:"Amnino Acids",answer:"Amnino acid",answer:"amnino acid",answer:"Amnino Acid"},
		{ question: "What molecule stores energy in cells?",answer:"ATP", answer:"atp"},
		{ question: "What is the jelly-like substance that fills the cell and supports its structure?",answer:"Cytoplasm",answer:"cytoplasm"},
		{ question: "What structure within the cell is responsible for protein synthesis?",answer:"Ribosomes",answer:"ribosomes"},
		{ question: "What structure packages and transports materials within the cell?",answer:"Endoplasmic rediculum",answer:"endoplasmic rediculum",answer:"Endoplasmic Rediculum",answer:"endoplasmic Rediculum"},
		{ question: "What structure breaks down waste products and cellular materials?",answer:"Lysosomes",answer:"lysosomes"},
		{ question: "It occurs when organisms of two different species produces an offspring.",answer:"Hybridization",answer:"hybridization"},
		{ question: "In which organ does the majority of nutrient absorption occur in the human digestive system?",answer:"Stomach", answer:"stomach"},
		{ question: "What is the process of turning light energy into chemical energy in plants?", answer: "photosynthesis", answer: "Photosynthesis" },
		{ question: "What is the name for the male reproductive cells in plants?", answer: "pollen", answer: "Pollen" },
		{ question: "What is the process by which organisms exchange gases with their environment?", answer: "respiration", answer: "Respiration" },
		{ question: "What is the site of gas exchange in the lungs?", answer: "Alveoli", answer: "alveoli" },
		{ question: "What is the process by which plants lose water through their leaves?", answer: "transpiration", answer: "Transpiration" }, 
		{ question: "What is the organ responsible for producing insulin?", answer: "pancreas", answer: "Pancreas" },
		{ question: "What is the name for the male reproductive cells in plants?", answer: "pollen", answer: "Pollen" },
		{ question: "What is the process by which organisms exchange gases with their environment?", answer: "respiration", answer: "Respiration" },
		{ question: "What is the scientific term for the voice box?", answer: "larynx", answer: "Larynx" },
		{ question: "What is the fluid that circulates in the vascular system of plants?", answer: "sap", answer: "Sap" },
		{ question: "What is the term for the maintenance of a stable internal environment?", answer: "homeostasis", answer: "Homeostasis" },
		{ question: "What is the site of gas exchange in the lungs?", answer: "alveoli" , answer: "Alveoli" },
		{ question: "What is the process by which plants lose water through their leaves?", answer: "transpiration", answer: "Transpiration" },
		{ question: "What is the organ responsible for producing insulin?", answer: "pancreas", answer: "Pancreas" },
		{ question: "What is the largest organ in the human body?", answer: "skin", answer: "Skin" },
		{ question: "What is the process by which a substance changes from a liquid to a gas at its boiling point?", answer: "vaporization", answer: "Vaporization" },
		{ question: "What is the phenomenon of a wave bending around obstacles or spreading through openings?", answer: "diffraction", answer: "Diffraction" },
		{ question: "What is the rate of change of displacement?", answer: "velocity", answer: "Velocity" },
		{ question: "What is the distance traveled per unit of time?", answer: "speed", answer: "Speed" },
		{ question: "What is the force experienced by a current-carrying conductor in a magnetic field?", answer: "Lorentz force", answer: "forentz force" },
		{ question: "What is the property of an object to resist changes in its state of motion?", answer: "Inertia", answer: "inertia" },
		{ question: "What is the process by which a substance changes from a gas to a solid without passing through the liquid state?", answer: "Deposition", answer: "deposition" },
		{ question: "What is the measure of the gravitational force exerted on an object?", answer: "Weight", answer: "weight" },
		{ question: "What is the process by which an object's velocity changes over time?", answer: "Acceleration", answer: "acceleration"  },
		{ question: "What is the SI unit of electric charge?", answer: "Coulomb", answer: "coulomb" },
		{ question: "What is the phenomenon where a wave encounters an obstacle and bends around it?", answer: "Diffraction", answer: "diffraction" },
		{ question: "What is the SI unit of power?", answer: "Watt", answer: "watt" },
		{ question: "What is the resistance of a conductor with zero resistance at very low temperatures called?", answer: "Superconductivity", answer: "superconductivity" },
		{ question: "What is the SI unit of electric current?", answer: "Ampere", answer: "ampere" },
		{ question: "What is the force that opposes the motion of objects moving through a fluid called?", answer: "Drag force" },
		{ question: "What is the process by which a substance changes from a solid to a gas without passing through the liquid state?", answer: "Sublimation", answer: "sublimation" },
		{ question: "What is the SI unit of magnetic flux?", answer: "Weber" },
		{ question: "What is the phenomenon where a material becomes magnetized in the presence of an external magnetic field and retains its magnetization after the field is removed?", answer: "Ferromagnetism", answer: "ferromagnetism" },
		{ question: "What is the SI unit of magnetic field strength?", answer: "Tesla", answer: "tesla" },
		{ question: "What is the SI unit of energy?", answer: "Joule",answer: "joule" },
		{ question: "What is the SI unit of frequency?", answer: "Hertz",answer: "hertz" },
		{ question: "What is the process by which an object changes its position or orientation with time?", answer: "Motion", answer: "motion" },
      ],
	  "Mathematics": [
         { question: "What is 2 + 2?", answer: "4" },
        { question: "What is 10 - 5?", answer: "5" },
        { question: "What is 3 × 4?", answer: "12" },
        { question: "What is 20 ÷ 5?", answer: "4" },
        { question: "What is the value of x in the equation 3x + 5 = 20?", answer: "5" },
        { question: "What is the value of y in the equation 2y - 7 = 11?", answer: "9" },
	    { question: "What is 7 + 9?", answer: "16" },
		{ question: "What is 15 - 6?", answer: "9" },
		{ question: "What is 5 × 8?", answer: "40" },
		{ question: "What is 36 ÷ 4?", answer: "9" },
		{ question: "What is the value of x in the equation 2x + 3 = 11?", answer: "4" },
		{ question: "What is the value of y in the equation 3y - 5 = 16?", answer: "7" },
		{ question: "What is the area of a square with side length 6?", answer: "36" },
		{ question: "What is the perimeter of a rectangle with length 10 and width 5?", answer: "30" },
		{ question: "What is the circumference of a circle with radius 4?", answer: "8π" },
		{ question: "What is the volume of a cube with side length 3?", answer: "27" },
		{ question: "Solve the equation 2x - 7 = 5.", answer: "x = 6" },
		{ question: "Solve the equation 4y + 8 = 20.", answer: "y = 3" },
		{ question: "What is 3 squared?", answer: "9" },
		{ question: "What is the square root of 64?", answer: "8" },
		{ question: "What is the value of π (pi) correct to two decimal places?", answer: "3.14" },
		{ question: "What is 12 + 7?", answer: "19" },
		{ question: "What is 25 - 9?", answer: "16" },
		{ question: "What is 6 × 5?", answer: "30" },
		{ question: "What is 48 ÷ 6?", answer: "8" },
		{ question: "What is the value of x in the equation 2x - 3 = 9?", answer: "6" },
		{ question: "What is the value of y in the equation 4y + 10 = 34?", answer: "6" },
		{ question: "What is the area of a rectangle with length 8 and width 4?", answer: "32" },
		{ question: "What is the perimeter of a square with side length 9?", answer: "36" },
		{ question: "What is the circumference of a circle with diameter 10?", answer: "10π" },
		{ question: "What is the volume of a cylinder with radius 5 and height 7?", answer: "275π" },
		{ question: "Solve the equation 3x + 8 = 20.", answer: "x = 4" },
		{ question: "Solve the equation 5y - 12 = 33.", answer: "y = 9" },
		{ question: "What is 5 squared?", answer: "25" },
		{ question: "What is the square root of 81?", answer: "9" },
		{ question: "What is the value of π (pi) correct to two decimal places?", answer: "3.14" },
		{ question: "What is the sum of the first 10 positive integers?", answer: "55" },
		{ question: "What is the product of 7 and 11?", answer: "77" },
		{ question: "What is the result of 3 to the power of 4?", answer: "81" },
		{ question: "What is the value of 4 factorial?", answer: "24" },
		{ question: "What is the solution to the equation 2x + 5 = 17?", answer: "x = 6" },
		{ question: "What is 17 + 25?", answer: "42" },
		{ question: "What is 56 - 33?", answer: "23" },
		{ question: "What is 9 × 8?", answer: "72" },
		{ question: "What is 144 ÷ 12?", answer: "12" },
		{ question: "What is the value of x in the equation 3x + 7 = 25?", answer: "6" },
		{ question: "What is the value of y in the equation 5y - 12 = 23?", answer: "7" },
		{ question: "What is the area of a triangle with base 10 and height 8?", answer: "40" },
		{ question: "What is the perimeter of a rectangle with length 15 and width 9?", answer: "48" },
		{ question: "What is the circumference of a circle with radius 6?", answer: "12π" },
		{ question: "What is the volume of a sphere with radius 4?", answer: "256π/3" },
		{ question: "Solve the equation 4x - 9 = 27.", answer: "x = 9" },
		{ question: "Solve the equation 2y + 15 = 33.", answer: "y = 9" },
		{ question: "What is 6 squared?", answer: "36" },
		{ question: "What is the square root of 100?", answer: "10" },
		{ question: "What is the value of π (pi) correct to two decimal places?", answer: "3.14" },
		{ question: "What is the sum of the first 20 positive integers?", answer: "210" },
		{ question: "What is the product of 9 and 10?", answer: "90" },
		{ question: "What is the result of 2 to the power of 6?", answer: "64" },
		{ question: "What is the value of 5 factorial?", answer: "120" },
		{ question: "What is the solution to the equation 3x - 8 = 16?", answer: "x = 8" },
		{ question: "What is 37 + 58?", answer: "95" },
		{ question: "What is 84 - 29?", answer: "55" },
		{ question: "What is 12 × 11?", answer: "132" },
		{ question: "What is 144 ÷ 12?", answer: "12" },
		{ question: "What is the value of x in the equation 4x - 9 = 27?", answer: "9" },
		{ question: "What is the value of y in the equation 3y + 15 = 42?", answer: "9" },
		{ question: "What is the area of a rectangle with length 20 and width 15?", answer: "300" },
		{ question: "What is the perimeter of a square with side length 9?", answer: "36" },
		{ question: "What is the circumference of a circle with diameter 12?", answer: "12π" },
		{ question: "What is the volume of a cube with side length 6?", answer: "216" },
		{ question: "Solve the equation 5x - 17 = 38.", answer: "x = 11" },
		{ question: "Solve the equation 2y + 20 = 54.", answer: "y = 17" },
		{ question: "What is 8 squared?", answer: "64" },
		{ question: "What is the square root of 144?", answer: "12" },
		{ question: "What is the value of π (pi) correct to two decimal places?", answer: "3.14" },
		{ question: "What is the sum of the first 30 positive integers?", answer: "465" },
		{ question: "What is the product of 7 and 9?", answer: "63" },
		{ question: "What is the result of 3 to the power of 5?", answer: "243" },
		{ question: "What is the value of 6 factorial?", answer: "720" },
		{ question: "What is the solution to the equation 2x - 5 = 15?", answer: "x = 10" }
	   ],
	   
		"General World History": [
		{ question: "Who was the first emperor of ancient Rome?", answer: "Augustus Caesar" },
		{ question: "Which ancient civilization built the pyramids?", answer: "Ancient Egyptians" },
		{ question: "Who was the founder of Buddhism?", answer: "Siddhartha Gautama (Buddha)" },
		{ question: "Which famous event marked the start of the French Revolution?", answer: "Storming of the Bastille" },
		{ question: "Who was the first female pharaoh of ancient Egypt?", answer: "Hatshepsut" },
		{ question: "What was the capital of the Byzantine Empire?", answer: "Constantinople (Istanbul)" },
		{ question: "Who wrote 'The Communist Manifesto'?", answer: "Karl Marx and Friedrich Engels" },
		{ question: "Who was the first European explorer to reach India by sea?", answer: "Vasco da Gama" },
		{ question: "Who was the leader of the Soviet Union during World War II?", answer: "Joseph Stalin" },
		{ question: "Who was the longest-reigning monarch in British history?", answer: "Queen Victoria" },
		{ question: "What was the main purpose of the Magna Carta?", answer: "Limiting the power of the monarchy" },
		{ question: "Which civilization is credited with the invention of the wheel?", answer: "Mesopotamians" },
		{ question: "Who was the first emperor of China's Qin Dynasty?", answer: "Qin Shi Huang" },
		{ question: "Who was the first female Prime Minister of the United Kingdom?", answer: "Margaret Thatcher" },
		{ question: "What was the significance of the Code of Hammurabi?", answer: "One of the earliest written legal codes" },
		{ question: "Who was the first president of the United States?", answer: "George Washington" },
		{ question: "Which ancient civilization is known for its impressive terraced agriculture and monumental architecture?", answer: "Inca Empire" },
		{ question: "What was the name of the famous ancient trade route that connected China with the Mediterranean?", answer: "Silk Road" },
		{ question: "Who was the first emperor of the Maurya Empire in ancient India?", answer: "Chandragupta Maurya" },
		{ question: "Which event is considered the beginning of the Protestant Reformation?", answer: "Posting of the 95 Theses by Martin Luther" },
		{ question: "Who was the longest-reigning monarch in Russian history?", answer: "Peter the Great" },
		{ question: "Which ancient civilization is credited with the creation of the first written language?", answer: "Sumerians" },
		{ question: "Who was the leader of the Haitian Revolution, leading to the first successful slave revolt?", answer: "Toussaint Louverture" },
		{ question: "What was the name of the ancient trade network that connected the Mediterranean with East Africa, Arabia, and India?", answer: "Indian Ocean Trade" },
		{ question: "Who was the last emperor of France?", answer: "Napoleon Bonaparte" },
		{ question: "Which ancient civilization is known for its construction of the Great Wall?", answer: "Ancient China" },
		{ question: "Who was the first female president of a country in the modern era?", answer: "Vigdís Finnbogadóttir (Iceland)" },
		{ question: "What was the main purpose of the Berlin Conference of 1884-1885?", answer: "Partitioning of Africa among European powers" },
		{ question: "Who was the leader of the Bolshevik Party during the Russian Revolution?", answer: "Vladimir Lenin" },
		{ question: "Which European explorer reached the Americas in 1492?", answer: "Christopher Columbus" },
		{ question: "What was the capital of the Aztec Empire?", answer: "Tenochtitlan" },
		{ question: "Who was the first emperor of the Roman Empire?", answer: "Julius Caesar" },
		{ question: "What was the significance of the Treaty of Versailles?", answer: "End of World War I and establishment of peace terms" },
		{ question: "Who was the leader of the Soviet Union during the Cuban Missile Crisis?", answer: "Nikita Khrushchev" },
		{ question: "What was the name of the ancient civilization that developed in the Indus Valley?", answer: "Indus Valley Civilization" },
		{ question: "Who was the first female president of the United States?", answer: "There has not been a female president of the United States yet" },
		{ question: "What was the name of the famous ship that brought the Pilgrims to America in 1620?", answer: "Mayflower" },
		{ question: "Who was the founder of the Mongol Empire?", answer: "Genghis Khan" },
		{ question: "What was the name of the treaty that ended World War II in Europe?", answer: "Treaty of Versailles" },
		{ question: "Who was the first female Prime Minister of India?", answer: "Indira Gandhi" },
		{ question: "Which ancient civilization is known for its invention of democracy?", answer: "Ancient Greece" },
		{ question: "Who was the first African-American president of the United States?", answer: "Barack Obama" },
		{ question: "What was the name of the ancient trade route that connected China with the Roman Empire?", answer: "Silk Road" },
		{ question: "Who was the leader of the Russian Revolution in 1917?", answer: "Vladimir Lenin" },
		{ question: "What was the main purpose of the Marshall Plan?", answer: "Rebuilding Europe after World War II" },
		{ question: "Who was the leader of the Haitian Revolution?", answer: "Toussaint Louverture" },
		{ question: "What was the name of the ancient empire ruled by Alexander the Great?", answer: "Macedonian Empire" },
		{ question: "Who was the first emperor of Japan?", answer: "Emperor Jimmu" },
		{ question: "What was the name of the war between Athens and Sparta in ancient Greece?", answer: "Peloponnesian War" },
		{ question: "Who was the first female Chancellor of Germany?", answer: "Angela Merkel" },
		{ question: "What was the name of the ancient city known for its Hanging Gardens?", answer: "Babylon" },
		{ question: "Who was the leader of the Soviet Union during the Chernobyl nuclear disaster?", answer: "Mikhail Gorbachev" },
		{ question: "What was the main purpose of the Emancipation Proclamation?", answer: "Freeing slaves in Confederate states" },
		{ question: "Who was the last queen of France before the French Revolution?", answer: "Marie Antoinette" },
		{ question: "What was the name of the ancient empire ruled by Julius Caesar?", answer: "Roman Empire" },
		{ question: "Who was the first female president of Brazil?", answer: "Dilma Rousseff" },
		{ question: "What was the name of the ancient city known for its library and lighthouse?", answer: "Alexandria" },
		{ question: "Who was the leader of the Soviet Union during the Cold War?", answer: "Joseph Stalin" },
		{ question: "What was the name of the ancient city known for its Hanging Gardens?", answer: "Babylon" },
		{ question: "Who was the leader of the Soviet Union during the Chernobyl nuclear disaster?", answer: "Mikhail Gorbachev" },
		{ question: "What was the main purpose of the Emancipation Proclamation?", answer: "Freeing slaves in Confederate states" },
		{ question: "Who was the last queen of France before the French Revolution?", answer: "Marie Antoinette" },
		{ question: "What was the name of the ancient empire ruled by Julius Caesar?", answer: "Roman Empire" },
		{ question: "Who was the first female president of Brazil?", answer: "Dilma Rousseff" },
		{ question: "What was the name of the ancient city known for its library and lighthouse?", answer: "Alexandria" },
		{ question: "Who was the leader of the Soviet Union during the Cold War?", answer: "Nikita Khrushchev" },
		{ question: "What was the main purpose of the Marshall Plan?", answer: "Rebuilding Europe after World War II" },
		{ question: "Who was the leader of the Haitian Revolution?", answer: "Toussaint Louverture" },
		{ question: "What was the name of the ancient empire ruled by Alexander the Great?", answer: "Macedonian Empire" },
		{ question: "Who was the first emperor of Japan?", answer: "Emperor Jimmu" },
		{ question: "What was the name of the war between Athens and Sparta in ancient Greece?", answer: "Peloponnesian War" },
		{ question: "Who was the first female Chancellor of Germany?", answer: "Angela Merkel" }
		],
		
		
	    "Philosophy": [
	    { question: "Who is known for his 'philosophy of history'?", answer: "Georg Wilhelm Friedrich Hegel" },
		{ question: "What is the philosophical term for the belief that reality is ultimately mental or spiritual?", answer: "Idealism" },
		{ question: "Who is the author of 'The Phenomenology of Spirit'?", answer: "Georg Wilhelm Friedrich Hegel" },
		{ question: "What is the philosophical theory that the meaning of a word is its use in the language?", answer: "Pragmatism" },
		{ question: "Who is known for his 'principle of utility'?", answer: "John Stuart Mill" },
		{ question: "What is the philosophical term for the belief that knowledge is derived from reason?", answer: "Rationalism" },
		{ question: "Who proposed the 'pleasure principle' as a basis for ethics?", answer: "Sigmund Freud" },
		{ question: "What is the philosophical concept of the 'demiurge'?", answer: "A divine craftsman or creator" },
		{ question: "Who is known for his 'philosophy of the absurd'?", answer: "Albert Camus" },
		{ question: "What is the philosophical term for the belief that knowledge is derived from sensory experience?", answer: "Empiricism" },
		{ question: "Who proposed the 'hedonic calculus' for determining the morality of actions?", answer: "Jeremy Bentham" },
		{ question: "What is the philosophical principle that states that the simplest explanation is usually the correct one?", answer: "Occam's Razor" },
		{ question: "Who is known for his concept of the 'will to power'?", answer: "Friedrich Nietzsche" },
		{ question: "What is the philosophical term for the study of the nature of reality?", answer: "Metaphysics" },
		{ question: "Who is the author of 'Thus Spoke Zarathustra'?", answer: "Friedrich Nietzsche" },
		{ question: "What is the philosophical theory that knowledge is derived from reason and innate ideas?", answer: "Rationalism" },
		{ question: "Who proposed the 'golden mean' as a principle of virtue ethics?", answer: "Aristotle" },
		{ question: "What is the philosophical term for the belief that knowledge is uncertain?", answer: "Skepticism" },
		{ question: "Who is known for his 'cogito, ergo sum' argument?", answer: "René Descartes" },
		{ question: "What is the philosophical concept of the 'tabula rasa'?", answer: "The mind at birth being a blank slate" },
		{ question: "Who is known for his 'philosophy of history'?", answer: "Georg Wilhelm Friedrich Hegel" },
		{ question: "What is the philosophical term for the belief that reality is ultimately mental or spiritual?", answer: "Idealism" },
		{ question: "Who is the author of 'The Phenomenology of Spirit'?", answer: "Georg Wilhelm Friedrich Hegel" },
		{ question: "What is the philosophical theory that the meaning of a word is its use in the language?", answer: "Pragmatism" },
		{ question: "Who is known for his 'principle of utility'?", answer: "John Stuart Mill" },
		{ question: "What is the philosophical term for the belief that knowledge is derived from reason?", answer: "Rationalism" },
		{ question: "Who proposed the 'pleasure principle' as a basis for ethics?", answer: "Sigmund Freud" },
		{ question: "What is the philosophical concept of the 'demiurge'?", answer: "A divine craftsman or creator" },
		{ question: "Who is known for his 'philosophy of the absurd'?", answer: "Albert Camus" },
		{ question: "What is the philosophical term for the belief that knowledge is derived from sensory experience?", answer: "Empiricism" },
		{ question: "Who proposed the 'hedonic calculus' for determining the morality of actions?", answer: "Jeremy Bentham" },
		{ question: "What is the philosophical principle that states that the simplest explanation is usually the correct one?", answer: "Occam's Razor" },
		{ question: "Who is known for his concept of the 'will to power'?", answer: "Friedrich Nietzsche" },
		{ question: "What is the philosophical term for the study of the nature of reality?", answer: "Metaphysics" },
		{ question: "Who is the author of 'Thus Spoke Zarathustra'?", answer: "Friedrich Nietzsche" },
		{ question: "What is the philosophical theory that knowledge is derived from reason and innate ideas?", answer: "Rationalism" },
		{ question: "Who proposed the 'golden mean' as a principle of virtue ethics?", answer: "Aristotle" },
		{ question: "What is the philosophical term for the belief that knowledge is uncertain?", answer: "Skepticism" },
		{ question: "Who is known for his 'cogito, ergo sum' argument?", answer: "René Descartes" },
		{ question: "What is the philosophical concept of the 'tabula rasa'?", answer: "The mind at birth being a blank slate" },
		{ question: "Who is known for his 'philosophy of history'?", answer: "Georg Wilhelm Friedrich Hegel" },
		{ question: "What is the philosophical term for the belief that reality is ultimately mental or spiritual?", answer: "Idealism" },
		{ question: "Who is the author of 'The Phenomenology of Spirit'?", answer: "Georg Wilhelm Friedrich Hegel" },
		{ question: "What is the philosophical theory that the meaning of a word is its use in the language?", answer: "Pragmatism" },
		{ question: "Who is known for his 'principle of utility'?", answer: "John Stuart"},
		{ question: "Who is considered the father of Western philosophy?", answer: "Socrates" },
		{ question: "What is the philosophical study of knowledge?", answer: "Epistemology" },
		{ question: "What is the famous philosophical question posed by René Descartes?", answer: "I think, therefore I am" },
		{ question: "What is the concept of 'cogito ergo sum' commonly known as?", answer: "Cartesian dualism" },
		{ question: "Who wrote 'Meditations on First Philosophy'?", answer: "René Descartes" },
		{ question: "What is the central concept of existentialism?", answer: "Existence precedes essence" },
		{ question: "Who wrote 'Being and Nothingness'?", answer: "Jean-Paul Sartre" },
		{ question: "What is the principle of non-contradiction?", answer: "A statement cannot be both true and false at the same time" },
		{ question: "Who is the author of 'Critique of Pure Reason'?", answer: "Immanuel Kant" },
		{ question: "What is the ethical theory that emphasizes the pursuit of happiness?", answer: "Utilitarianism" },
		{ question: "Who is the founder of utilitarianism?", answer: "Jeremy Bentham" },
		{ question: "What is the study of values and principles relating to human conduct?", answer: "Ethics" },
		{ question: "Who is known for his concept of the 'veil of ignorance'?", answer: "John Rawls" },
		{ question: "What is the philosophical theory that asserts that the mind and body are distinct substances?", answer: "Dualism" },
		{ question: "Who wrote 'The Republic'?", answer: "Plato" },
		{ question: "What is the branch of philosophy concerned with the nature of existence?", answer: "Metaphysics" },
		{ question: "Who is considered the founder of pragmatism?", answer: "Charles Sanders Peirce" },
		{ question: "What is the philosophical position that all events are predetermined?", answer: "Determinism" },
		{ question: "Who proposed the 'categorical imperative' as a basis for ethics?", answer: "Immanuel Kant" },
		{ question: "What is the philosophical position that reality is ultimately composed of only one essence?", answer: "Monism" },
		{ question: "Who is known for his philosophical work 'Thus Spoke Zarathustra'?", answer: "Friedrich Nietzsche" },
		{ question: "What is the philosophical term for the study of the nature of being and existence?", answer: "Ontology" },
		{ question: "Who is the author of 'Being and Time'?", answer: "Martin Heidegger" },
		{ question: "What is the philosophical concept of the 'social contract'?", answer: "An agreement among individuals forming a society" },
		{ question: "Who is known for his 'theory of forms'?", answer: "Plato" },
		{ question: "What is the philosophical term for the belief in the existence of only one reality?", answer: "Realism" },
		{ question: "Who is known for his 'hierarchy of needs'?", answer: "Abraham Maslow" },
		{ question: "What is the philosophical position that all knowledge is derived from sensory experience?", answer: "Empiricism" },
		{ question: "Who proposed the 'hedonic calculus' for determining the morality of actions?", answer: "Jeremy Bentham" },
		{ question: "What is the philosophical principle that states that the simplest explanation is usually the correct one?", answer: "Occam's Razor" },
		{ question: "Who is known for his concept of the 'will to power'?", answer: "Friedrich Nietzsche" },
		{ question: "What is the philosophical term for the study of the nature of reality?", answer: "Metaphysics" },
		{ question: "Who is the author of 'Thus Spoke Zarathustra'?", answer: "Friedrich Nietzsche" },
		{ question: "What is the philosophical theory that knowledge is derived from reason and innate ideas?", answer: "Rationalism" },
		{ question: "Who proposed the 'golden mean' as a principle of virtue ethics?", answer: "Aristotle" },
		{ question: "What is the philosophical term for the belief that knowledge is uncertain?", answer: "Skepticism" },
		{ question: "Who is known for his 'cogito, ergo sum' argument?", answer: "René Descartes" },
		{ question: "What is the philosophical concept of the 'tabula rasa'?", answer: "The mind at birth is a blank slate" },
		{ question: "Who is known for his 'philosophy of history'?", answer: "Georg Wilhelm Friedrich Hegel" },
		{ question: "What is the philosophical term for the belief that reality is ultimately mental or spiritual?", answer: "Idealism" },
		{ question: "Who is the author of 'The Phenomenology of Spirit'?", answer: "Georg Wilhelm Friedrich Hegel" },
		{ question: "What is the philosophical theory that the meaning of a word is its use in the language?", answer: "Pragmatism" },
		{ question: "Who is known for his 'principle of utility'?", answer: "John Stuart Mill" },
		{ question: "What is the philosophical term for the belief that knowledge is derived from reason?", answer: "Rationalism" },
		{ question: "Who proposed the 'pleasure principle' as a basis for ethics?", answer: "Sigmund Freud" },
		{ question: "What is the philosophical concept of the 'demiurge'?", answer: "A divine craftsman or creator" },
		{ question: "Who is known for his 'philosophy of the absurd'?", answer: "Albert Camus" },
		{ question: "What is the philosophical term for the belief that knowledge is derived from sensory experience?", answer: "Empiricism" },
		{ question: "Who proposed the 'hedonic calculus' for determining the morality of actions?", answer: "Jeremy Bentham" },
		{ question: "What is the philosophical principle that states that the simplest explanation is usually the correct one?", answer: "Occam's Razor" },
		{ question: "Who is known for his concept of the 'will to power'?", answer: "Friedrich Nietzsche" },
		{ question: "What is the philosophical term for the study of the nature of reality?", answer: "Metaphysics" },
		{ question: "Who is the author of 'Thus Spoke Zarathustra'?", answer: "Friedrich Nietzsche" },
		{ question: "What is the philosophical theory that knowledge is derived from reason and innate ideas?", answer: "Rationalism" },
		{ question: "Who proposed the 'golden mean' as a principle of virtue ethics?", answer: "Aristotle" },
		{ question: "What is the philosophical term for the belief that knowledge is uncertain?", answer: "Skepticism" },
		{ question: "Who is known for his 'cogito, ergo sum' argument?", answer: "René Descartes" }
	   ],
		};

var selectedSubject = "";
var selectedQuestions = [];
var userAnswers = [];

function showSubjects() {
document.getElementById("first-page").style.display = "none";
document.getElementById("subject-selection").style.display = "block";
}

function selectSubject(subject, event) {
  var subjectButtons = document.getElementsByClassName("subject-button");
  for (var i = 0; i < subjectButtons.length; i++) {
    subjectButtons[i].classList.remove("selected");
  }
  event.target.classList.add("selected");
  selectedSubject = subject;
}

function showInputQuestion() {
if (selectedSubject !== "") {
document.getElementById("subject-selection").style.display = "none";
document.getElementById("input-question").style.display = "block";
} else {
alert("Please select a subject first.");
}
}

function beginQuiz() {
var quantity = parseInt(document.getElementById("quantity").value);
if (isNaN(quantity) || quantity <= 0) {
alert("Please enter a valid number of questions.");
return;
}
var availableQuestions = questions[selectedSubject];
if (quantity > availableQuestions.length) {
alert("Requested number of questions exceeds the available questions. Please enter a smaller number.");
return;
}

selectedQuestions = shuffleArray(availableQuestions).slice(0, quantity);
document.getElementById("input-question").style.display = "none";
document.getElementById("quiz-area").style.display = "block";
document.getElementById("selected-subject").textContent = selectedSubject;
displayQuestions();
}

function displayQuestions() {
  var questionList = document.getElementById("question-list");
  questionList.innerHTML = "";
  selectedQuestions.forEach((q, index) => {
    questionList.innerHTML += `
      <div>
        <p>${index + 1}. ${q.question}</p>
        <input type="text" id="answer-${index}" />
      </div>
    `;
  });
}

function showResults() {
  userAnswers = selectedQuestions.map((_, index) => document.getElementById(`answer-${index}`).value.trim());
  var resultList = document.getElementById("result-list");
  resultList.innerHTML = "";
  selectedQuestions.forEach((q, index) => {
    var correct = userAnswers[index].toLowerCase() === q.answer.toLowerCase();
    resultList.innerHTML += `
      <div>
        <p>${index + 1}. ${q.question}</p>
        <p>Your answer: ${userAnswers[index]}</p>
        <p>Correct answer: ${q.answer}</p>
        <p>${correct ? 'Correct' : 'Wrong'}</p>
      </div>
    `;
  });
  document.getElementById("quiz-area").style.display = "none";
  document.getElementById("results").style.display = "block";
}

function exitToMenu() {
  document.getElementById("results").style.display = "none";
  document.getElementById("first-page").style.display = "block";
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function showAnalysis() {
    document.getElementById("results").style.display = "none";
    document.getElementById("analysis").style.display = "block";
    var totalQuestions = selectedQuestions.length;
    var correctAnswers = 0;
    for (var i = 0; i < totalQuestions; i++) {
        if (userAnswers[i].toLowerCase() === selectedQuestions[i].answer.toLowerCase()) {
            correctAnswers++;
        }
    }
    var scorePercentage = (correctAnswers / totalQuestions) * 100;
    var analysisMessage;
    if (scorePercentage >= 70) {
        analysisMessage = "Congratulations! You did a great job!";
    } else if (scorePercentage >= 50) {
        analysisMessage = "Not bad! You did okay.";
    } else {
        analysisMessage = "Keep practicing!";
    }
    document.getElementById("analysis-message").textContent = analysisMessage;
    document.getElementById("percentage").textContent = "Your score: " + correctAnswers + "/" + totalQuestions + " (" + scorePercentage.toFixed(2) + "%)";
}
function backToResults() {
    document.getElementById("analysis").style.display = "none";
    document.getElementById("results").style.display = "block";
}
