import React, { useEffect } from 'react';

const WaterMarkQues = () => {
  useEffect(() => {
    const container = document.getElementById('watermark-container');
    const rows = 2;
    const cols = 2;
    const watermarkText = '12317692';

    for (let i = 0; i < 100; i++) {
      const watermarkItem = document.createElement('div');
      watermarkItem.classList.add('watermark-item');

      const watermark = document.createElement('span');
      watermark.classList.add('watermark');
      watermark.textContent = watermarkText;

      watermarkItem.appendChild(watermark);
      container.appendChild(watermarkItem);
    }
  }, []);
  return (
    <>
    <div className='w-full h-[100%] bg-white  relative overflow-x-hidden  scrollbar-thin'>
      <div className=" p-3 z-20 ">
        <div class="main-content">
            {/* Content */}
      
        <h1 className="text-2xl font-bold mb-4">Single File Programming Question</h1>
        <h3 className="text-xl mb-2">Problem Statement</h3>
        <p className="text-gray-600 mb-4">
          Sandeep is developing a language processing tool for a linguistics research project. The goal is to analyze the consonant usage in a given text. Write a program that takes a paragraph as input and counts the number of consonants in each word of the text. Utilize the{' '}
          <span className="text-black font-semibold">pointer-to-pointer</span> concept to analyze the query and count the consonants.
        </p>

        <h2 className="text-xl mb-2">Input format:</h2>
        <p className="text-gray-600 mb-4">The input consists of a list of words/sentences.</p>

        <h2 className="text-xl mb-2">Output format:</h2>
        <p className="text-gray-600 mb-4">The output prints the count of the consonants that are present in the given sentence(s).</p>

        <h3 className="text-lg mb-2">Refer to the sample output for formatting specifications.</h3>

        <h2 className="text-xl mb-2">Code constraints:</h2>
        <p className="text-gray-600 mb-4">
          In this scenario, the test cases fall under the following constraints: The total number of characters in the sentence(s) is ≤ 1000.
        </p>

        <h2 className="text-xl mb-2">Sample test cases:</h2>
        </div>
        </div>
  
      <div
        class="watermark-container absolute w-full h-[44rem]  top-0 left-0 grid grid-cols-5 gap-6 space-x-4 space-y-10 z-10 overflow-hidden "
        id="watermark-container"
      ></div>
      </div>
      </>
  );
};

export default WaterMarkQues;
