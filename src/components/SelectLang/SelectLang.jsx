import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../../redux/slices/filterSlice';
import { useState } from 'react';
import { Wr, Span, Sort, LangItem } from './SelectLang.styled';
const list = [
    { name: "UK" },
    { name: "EN" }
];

const SelectLang = () => {
    const dispatch = useDispatch();
    const sort = useSelector((state) => state.filter.sort);

    const [open, setOpen] = useState(false);

    const onClickItem = (obj) => {
        dispatch(setSort(obj));
        setOpen(false);
    }



    return (
        <Wr>
            <svg style={{
                position: 'absolute',
                left: '60px',
                top: '20px',
            }}
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 6L11 1"
                    stroke="#3F3F3F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
</svg>
            <Span onClick={() => setOpen(!open)} >{sort.name}</Span>
            {
                open && (
                    <Sort>
                        <ul>
                        {
                            list.map((obj, i) => (
                                <LangItem key={i}
                                    onClick={() => onClickItem(obj)}>{obj.name}</LangItem>
                            ))
                            }
                        </ul>
                    </Sort>
                )
            }
        </Wr>
)
}
export default SelectLang;
