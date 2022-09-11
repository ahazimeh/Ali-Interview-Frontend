import React from 'react'
const ReusableTable = (props: any) => {
    return (
        <>
            <div>ReusableTable</div>
            <div>
                <table className="table">
                    <tbody>

                        {
                            props.data.map((data: any) => {
                                return (
                                    <tr>
                                        {props.tableKeys.map((dataKeys: any) => {
                                            let x = data;
                                            dataKeys.path.map((keysArray: any, index: any) => {
                                                x = x[dataKeys.path[index]]
                                            })
                                            console.log(data.extraClasses)
                                            return <td className={dataKeys.extraClasses}>{x}</td>;
                                        })}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ReusableTable;