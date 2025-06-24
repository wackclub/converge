export const FaqSection = (): JSX.Element => {
    const faqs = [
        ["Can I submit my project to Summer of Making too?", "Absolutely! Just make sure you submit your devlogs on the SoM website."],
        ["Can I submit an existing project?", "You need to create a new project for Converge - existing projects won't be accepted."],
        ["Do I have to use a specific library/language?", "No! Feel free to use the tools you're most comfortable with (but for Slackbots, we'd recommend you use Slack's Bolt libraries)"],
        ["Does my project need to be open source?", "Yes. You don't need to include API keys or .env files, but all code/assets needed to make the bot work properly should be in your repo."],
        ["Can I submit my project to Thunder?", "Yes, if you're working on a Slackbot, you can submit that bot to Thunder too. However, your tokens will be <b>reduced by 50%.</b> Keep that in mind whilst working on your project!"],
        ["Will there be workshops/guides on how to build my bots?", "Yes! Keep your eyes peeled on the #converge channel for more info."]
    ]

    return (
        <section className="w-full py-14 bg-[#f6f2ec] border-t border-b border-[#e2e2e2] flex flex-col items-center px-4 sm:px-8">
            <h2 className="text-4xl sm:text-6xl text-center [font-family:'Fraunces',Helvetica] font-bold text-[#552200] mb-4">
                FAQ
            </h2>

            <p className="font-['Fraunces',Helvetica] text-[#552200] text-2xl text-center mb-10 text-pretty">
                Got questions? We've got answers.
            </p>

            <div className="flex flex-col sm:grid grid-cols-2 items-stretch justify-center gap-4 sm:gap-6 mb-8 w-2/3">
                {faqs.map(([question, answer], index) => (
                    <div className="space-y-2 text-center sm:text-left" key={index}>
                        <h3 className="[font-family:'Fraunces',Helvetica] font-extrabold sm:text-xl text-pretty">
                            {question}
                        </h3>
                        <p className="[font-family:'Fraunces',Helvetica] text-xl mt-2 text-pretty" dangerouslySetInnerHTML={{ __html: answer }} />
                    </div>
                ))}
            </div>
        </section>
    );
};
