import React, { useState, useRef } from 'react';

export default function GradingForm() {
  // State for comments
  const [comments, setComments] = useState({
    productDescription: '',
    nzMarket: '',
    segment1: '',
    segment2: '',
    identity: '',
    sufficiency: '',
    stability: '',
    accessibility: '',
    positioningStatement: '',
    positioningMap: '',
    charts: '',
    presentation: ''
  });

  // State for checkbox selections
  const [sections, setSections] = useState({
    productDescription: {
      title: "Product Description (5)",
      items: [
        { id: 'pd1', label: 'Product description is clear', score: 2, checked: false },
        { id: 'pd2', label: 'Brand is stated and clear', score: 1, checked: false },
        { id: 'pd3', label: 'Product value/benefit to customer is clear', score: 2, checked: false },
        { id: 'pd6', label: 'Not obviously aligned with semester theme', score: -2, checked: false },
        { id: 'pd4', label: 'Idea seems unoriginal', score: -3, checked: false },
        { id: 'pd5', label: 'Suspected Undeclared AI use', score: 0, checked: false }
      ]
    },
    nzMarket: {
      title: "NZ Market (10)",
      items: [
        { id: 'nz1', label: 'Demographic section includes population, ethnic groups, major cities, average ages', score: 2, checked: false },
        { id: 'nz2', label: 'Socioeconomic section includes correct median income, occupations,etc.', score: 2, checked: false },
        { id: 'nz3', label: 'Geographic section explains consumption behaviour by location', score: 2, checked: false },
        { id: 'nz4', label: 'Culture Section cultural aspects that affect CB', score: 2, checked: false },
        { id: 'nz5', label: 'Behaviour section specific examples of CB in NZ', score: 2, checked: false },
        { id: 'nz6', label: 'No chart included in this section', score: -2, checked: false },
        { id: 'nz7', label: 'Incorrect median income OR incorrect citation for median income', score: -2, checked: false },
        { id: 'nz8', label: 'Missing or inaccurate statistics (e.g. population etc.)', score: -2, checked: false },
        { id: 'nz9', label: 'Missing or inaccurate citations (not valid sources, missing references, etc.)', score: -2, checked: false },
        { id: 'nz10', label: 'Parts dont make sense for actual NZ or are too broad (could refer to any country)', score: -2, checked: false },
        { id: 'nz11', label: 'Suspected Undeclared AI use', score: 0, checked: false }
      ]
    },
    segment1: {
      title: "Segment 1 (10)",
      items: [
        { id: 's1_1', label: 'Has segment name', score: 2, checked: false },
        { id: 's1_2', label: 'Demographic factors (age, gender, location)', score: 2, checked: false },
        { id: 's1_4', label: 'Socioeconomic factors (versus median income, occupation)', score: 2, checked: false },
        { id: 's1_5', label: 'Behavioural, cultural factors related to product (how product is used, accessed)', score: 4, checked: false },
        { id: 's1_6', label: 'Income level not compared to median income or incorrect median used', score: -2, checked: false },
        { id: 's1_7', label: 'Too general to be an identified segment', score: -2, checked: false },
        { id: 's1_8', label: 'Unclear as to how segment derives value from product', score: -2, checked: false },
        { id: 's1_9', label: 'Suspected Undeclared AI use', score: 0, checked: false }
      ]
    },
    segment2: {
      title: "Segment 2 (10)",
      items: [
        { id: 's2_1', label: 'Has segment name', score: 2, checked: false },
        { id: 's2_2', label: 'Demographic factors (age, gender, location)', score: 2, checked: false },
        { id: 's2_4', label: 'Socioeconomic factors (versus median income, occupation)', score: 2, checked: false },
        { id: 's2_5', label: 'Behavioural, cultural factors related to product (how product is used, accessed)', score: 4, checked: false },
        { id: 's2_6', label: 'Income level not compared to median income or incorrect median used', score: -2, checked: false },
        { id: 's2_7', label: 'Too general to be an identified segment', score: -2, checked: false },
        { id: 's2_8', label: 'Unclear as to how segment derives value from product', score: -2, checked: false },
        { id: 's2_10', label: 'Not distinct from Segment 1', score: -2, checked: false },
        { id: 's2_9', label: 'Suspected Undeclared AI use', score: 0, checked: false }
      ]
    },
    identity: {
      title: "Identity (5)",
      items: [
        { id: 'id1', label: 'Has segment name (matches previous)', score: 1, checked: false },
        { id: 'id2', label: 'Demographic factors (as previous)', score: 1, checked: false },
        { id: 'id4', label: 'Socioeconomic factors (as previous)', score: 1, checked: false },
        { id: 'id5', label: 'Behavioural, cultural factors (as previous))', score: 2, checked: false },
        { id: 'id6', label: 'Income level not compared to median income', score: -2, checked: false },
        { id: 'id7', label: 'Too general to be an identified segment', score: -1, checked: false },
        { id: 'id8', label: 'Unclear as to how segment derives value from product', score: -1, checked: false },
        { id: 'id9', label: 'Suspected Undeclared AI use', score: 0, checked: false }
      ]
    },
    sufficiency: {
      title: "Sufficiency (5)",
      items: [
        { id: 'suf1', label: 'Clearly states a number of people in segment relative to NZ total', score: 2, checked: false },
        { id: 'suf2', label: 'Uses correct, relevant citations (with references at the end)', score: 1, checked: false },
        { id: 'suf6', label: 'Justifies and explains how the number was derived', score: 2, checked: false },
        { id: 'suf3', label: 'Unclear explanation of how the segment size was derived', score: -2, checked: false },
        { id: 'suf4', label: 'Number is too general/broad and could include non-segment consumers', score: -2, checked: false },
        { id: 'suf7', label: 'Explanation unclear or unconvincing', score: -2, checked: false },
        { id: 'suf5', label: 'Suspected Undeclared AI use', score: 0, checked: false }
      ]
    },
    stability: {
      title: "Stability (5)",
      items: [
        { id: 'stab1', label: 'Uses data to show how segment size changes over time', score: 2, checked: false },
        { id: 'stab2', label: 'Makes sense in relation to Identity', score: 1, checked: false },
        { id: 'stab3', label: 'Clearly shows segment is not shrinking', score: 1, checked: false },
        { id: 'stab4', label: 'Uses correct, relevant citations (with references at the end)', score: 1, checked: false },
        { id: 'stab5', label: 'Unclear explanation of why the segment is stable', score: -2, checked: false },
        { id: 'stab6', label: 'No citations/incorrect citations', score: -2, checked: false },
        { id: 'stab7', label: 'Suspected Undeclared AI use', score: 0, checked: false }
      ]
    },
    accessibility: {
      title: "Accessibility (5)",
      items: [
        { id: 'acc1', label: 'States which promotional channels the segment will use', score: 1, checked: false },
        { id: 'acc2', label: 'Explains why those channels will be used in context of the segment identity', score: 1, checked: false },
        { id: 'acc3', label: 'States the distribution channels the segment will use', score: 1, checked: false },
        { id: 'acc4', label: 'Explains why those channels will be used in context of the segment identity', score: 1, checked: false },
        { id: 'acc5', label: 'Clear and makes sense', score: 1, checked: false },
        { id: 'acc6', label: 'Suspected Undeclared AI use', score: 0, checked: false }
      ]
    },
    positioningStatement: {
      title: "Positioning Statement (8) - can be multi-sentence but fewer than 5 lines",
      items: [
        { id: 'ps1', label: 'States what the product/service actuall is', score: 2, checked: false },
        { id: 'ps2', label: 'States briefly the primary target customer market', score: 2, checked: false },
        { id: 'ps3', label: 'States the criteria the target customers will use to evaluate the product', score: 2, checked: false },
        { id: 'ps4', label: 'States the key factors that differentiate the brand from competitors', score: 2, checked: false },
        { id: 'ps5', label: 'Unclear in anyway', score: -2, checked: false },
        { id: 'ps6', label: 'Suspected Undeclared AI use', score: 0, checked: false }
      ]
    },
    positioningMap: {
      title: "Positioning Map (7)",
      items: [
        { id: 'pm1', label: 'Two axis grid map', score: 1, checked: false },
        { id: 'pm2', label: 'Axis labels are legible', score: 1, checked: false },
        { id: 'pm3', label: 'Axis labels correctly reference the values in the positioning statement', score: 3, checked: false },
        { id: 'pm5', label: '4+ brands plotted on the map', score: 2, checked: false },
        { id: 'pm6', label: 'Quality used on axes', score: -3, checked: false },
        { id: 'pm7', label: "Map unclear in any way (too small, low res, can't be read)", score: -1, checked: false },
        { id: 'pm8', label: 'Title missing', score: -1, checked: false },
        { id: 'pm9', label: 'One or more axis label missing', score: -1, checked: false },
        { id: 'pm10', label: "Student's brand missing from map", score: -1, checked: false },
        { id: 'pm11', label: 'Suspected Undeclared AI use', score: 0, checked: false }
      ]
    },
    charts: {
      title: "Charts (10)",
      items: [
        { id: 'ch1', label: 'Report has 3 or more charts', score: 5, checked: false },
        { id: 'ch2', label: 'Charts are all relevant to the text and make sense', score: 5, checked: false },
        { id: 'ch3', label: 'One or more charts are missing one more more key element (title, axis label, units, citation)', score: -3, checked: false },
        { id: 'ch4', label: 'One or more charts have low resolution/screenshot', score: -3, checked: false },
        { id: 'ch5', label: 'Citation on one or more charts is missing from reference list', score: -2, checked: false },
        { id: 'ch6', label: 'Suspected Undeclared AI use', score: 0, checked: false }
      ]
    },
    presentation: {
      title: "Presentation (15)",
      items: [
        { id: 'pr1', label: 'Report is clear and well written with no obvious grammatical or spelling errors', score: 3, checked: false },
        { id: 'pr2', label: 'Report is well researched with correct citations appearing in the text and mirrored in the reference list', score: 3, checked: false },
        { id: 'pr3', label: 'Report uses concise writing style - not padded, paragraphs mostly under 5 lines', score: 3, checked: false },
        { id: 'pr4', label: 'Report uses bullets correctly whenever referencing a list (no more than 2 lines per bullet)', score: 3, checked: false },
        { id: 'pr5', label: 'Report uses good structure with clear headers, subheaders and spacing between headers and text', score: 3, checked: false },
        { id: 'pr6', label: 'Multiple spelling errors', score: -2, checked: false },
        { id: 'pr7', label: 'Multiple grammatical errors', score: -2, checked: false },
        { id: 'pr8', label: 'Multiple APA citation format errors in text', score: -2, checked: false },
        { id: 'pr9', label: 'Reference list is not correct APA, not in alphabetical order or incomplete', score: -2, checked: false },
        { id: 'pr10', label: 'Writing is unclear in parts', score: -2, checked: false },
        { id: 'pr12', label: 'Exceeds 6 pages of content', score: -2, checked: false },
        { id: 'pr13', label: 'Multiple inaccurate, poorly chosen or irrelevant citations used', score: -2, checked: false },
        {id: 'pr11', label: 'Suspected Undeclared AI use', score: 0, checked: false }
      ]
    }
  });

  // Function to handle checkbox changes
  const handleCheckboxChange = (sectionKey, itemId) => {
    setSections(prevSections => {
      const updatedItems = prevSections[sectionKey].items.map(item => {
        if (item.id === itemId) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
      
      return {
        ...prevSections,
        [sectionKey]: {
          ...prevSections[sectionKey],
          items: updatedItems
        }
      };
    });
  };

  // Function to handle comment changes
  const handleCommentChange = (sectionKey, value) => {
    setComments(prevComments => ({
      ...prevComments,
      [sectionKey]: value
    }));
  };

// Calculate score for a section
const calculateSectionScore = (sectionKey) => {
  // If the AI item is checked, return 0
  if (sections[sectionKey].items.find(item => 
    item.label.includes('Suspected Undeclared AI use') && item.checked)) {
    return 0;
  }
  
  // Calculate normal score
  const score = sections[sectionKey].items.reduce((total, item) => {
    return item.checked ? total + item.score : total;
  }, 0);
  
  // Return 0 if score is negative, otherwise return the score
  return Math.max(0, score);
};


  // Copy function for each section
  const copySection = (sectionKey) => {
    const section = sections[sectionKey];
    const score = calculateSectionScore(sectionKey);
    const sectionTitle = section.title;
    
    // Get checked and unchecked items
    const checkedItems = section.items.filter(item => item.checked);
    const uncheckedItems = section.items.filter(item => !item.checked && item.score > 0);
    
    let textToCopy = `${sectionTitle}: Score = ${score}\n\n`;
    
    if (checkedItems.length > 0) {
      textToCopy += "Achieved:\n";
      checkedItems.forEach(item => {
        textToCopy += `- ${item.label} (${item.score})\n`;
      });
      textToCopy += "\n";
    }
    
    if (uncheckedItems.length > 0) {
      textToCopy += "Not Achieved:\n";
      uncheckedItems.forEach(item => {
        textToCopy += `- ${item.label} (${item.score})\n`;
      });
      textToCopy += "\n";
    }
    
    if (comments[sectionKey]) {
      textToCopy += `Comments: ${comments[sectionKey]}`;
    }
    
    // Copy to clipboard
    navigator.clipboard.writeText(textToCopy)
      .then(() => alert(`${sectionTitle} copied to clipboard!`))
      .catch(err => console.error('Failed to copy text: ', err));
  };

  // Calculate total score across all sections
  const calculateTotalScore = () => {
    return Object.keys(sections).reduce((total, sectionKey) => {
      return total + calculateSectionScore(sectionKey);
    }, 0);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Grading Checklist Form</h1>
      
      {Object.keys(sections).map(sectionKey => (
        <div key={sectionKey} className="mb-8 p-4 border rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">{sections[sectionKey].title}</h2>
          <p className="text-sm font-medium text-gray-700 mb-2">
            Current Score: {calculateSectionScore(sectionKey)}
          </p>
          
          <div className="space-y-2 mb-4">
            {sections[sectionKey].items.map(item => (
              <div key={item.id} className="flex items-start">
                <input
                  type="checkbox"
                  id={item.id}
                  checked={item.checked}
                  onChange={() => handleCheckboxChange(sectionKey, item.id)}
                  className="mt-1 mr-2"
                />
                <label htmlFor={item.id} className="text-sm">
                  {item.label} ({item.score})
                </label>
              </div>
            ))}
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Comments:
            </label>
            <textarea
              value={comments[sectionKey]}
              onChange={(e) => handleCommentChange(sectionKey, e.target.value)}
              className="w-full p-2 border rounded-md"
              rows="3"
            />
          </div>
          
          <button
            onClick={() => copySection(sectionKey)}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Copy Section
          </button>
        </div>
      ))}
      
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t shadow-lg flex justify-between items-center">
        <div className="text-lg font-bold">
          Total Score: {calculateTotalScore()}
        </div>
        <button
          onClick={() => {
            const totalText = `Total Score: ${calculateTotalScore()}`;
            navigator.clipboard.writeText(totalText)
              .then(() => alert('Total score copied to clipboard!'))
              .catch(err => console.error('Failed to copy text: ', err));
          }}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Copy Total Score
        </button>
      </div>
    </div>
  );
}