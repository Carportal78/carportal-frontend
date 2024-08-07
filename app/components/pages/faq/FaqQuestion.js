const FaqQuestion = () => { 
  const faqItems = [
    {
      question: "What is CarPortal.co.in?",
      answer:
        "CarPortal.co.in is an online automotive portal that helps users buy vehicles by providing comprehensive information, resources, and services.",
    },
    {
      question: "How do I access CarPortal.co.in?",
      answer:
        "Simply visit our website at CarPortal.co.in and explore our features, including searching for new cars and there reviews, and accessing dealer information.",
    },
    {
      question: "How is CarPortal.co.in content organized?",
      answer:
        "Our content is categorized into sections such as New Cars, Dealer Directory, Car Reviews, and Up coming Car News.",
    },
    {
      question: "What kind of topics can be found on CarPortal.co.in?",
      answer:
        "Our portal features detailed car specifications, reviews, news, photos, videos, and more, covering various aspects of the automotive industry.",
    },
    {
      question: "How frequently is CarPortal.co.in updated?",
      answer:
        "We update our content regularly to ensure users have access to the latest information and resources.",
    },
    {
      question: "Why do we do what we do?",
      answer:
        "We are passionate about cars and aim to share that passion with our users, making car buying and ownership a seamless and enjoyable experience.",
    }
  ];

  return (
    <div className="accordion" id="accordionExample">
      {faqItems?.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-header" id={`heading${index}`}>
            <h4 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={`collapse${index}`}
              >
                {item.question}
              </button>
            </h4>
          </div>
          <div
            id={`collapse${index}`}
            className={`collapse ${index === 0 ? "show" : ""}`}
            aria-labelledby={`heading${index}`}
            data-parent="#accordionExample"
          >
            <div className="card-body">
              <p className="mb30">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqQuestion;
