import { Driver as DriverPage } from "kun-wu";
import '@/components/driver/driver.css'

export const Driver = () => {
    return (
        <div className="!m-3 flex flex-col">
            <div className="!m-3">
                <button className='text-lg' onClick={() => {
                    const driverObj = DriverPage.driver({
                        showButtons: ["next", "previous"],
                        steps: [
                            {
                                element: "#driver-1",
                                popover: {
                                    popoverClass: "driverjs-theme",
                                    title: "Before we start",
                                    description: "This is just one use-case, make sure to look at the docs for more use-cases and examples.",
                                    nextBtnText: "Okay, start!",
                                    side: "bottom",
                                    align: "start"
                                }
                            },
                            {
                                element: "#driver-2",
                                popover: {
                                    popoverClass: "driverjs-theme",
                                    title: "Focus Anything",
                                    description: "You can use it to highlight literally anything, images, text, svg, div, span, li etc.",
                                    side: "bottom",
                                    align: "start"
                                }
                            },
                            {
                                element: "#driver-3",
                                popover: {
                                    title: "Why Driver.js",
                                    description: <div ><img className="size-10" src="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect/element-box-diagram.png" alt="测试图片" /></div>,
                                    side: "bottom",
                                    align: "start"
                                }
                            },
                        ]
                    });
                    driverObj.drive();
                }}>触发指引</button>
            </div>
            <div className="!m-3 flex flex-col items-center">
                {
                    Array.from({ length: 3 }, (_, index: number) => index + 1).map((item: any) => {
                        return (
                            <div id={'driver-' + item} key={'tab' + item} className="!m-3 flex flex-col items-center">{item}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}