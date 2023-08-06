import { Wrap, Input } from './HeaderSearch.styled';

const HeaderSearch = () => {
 
    return (
        <Wrap>
            <svg style={{
                position: 'absolute',
            left: '20px',
                top: '13px',
            opacity: '0.5',
            }}
                width="24"
                height="24"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M17.4697 18.5303C17.7626 18.8232 18.2374 18.8232 18.5303 18.5303C18.8232 18.2374 18.8232 17.7626 18.5303 17.4697L17.4697 18.5303ZM15.25 8.5C15.25 12.2279 12.2279 15.25 8.5 15.25V16.75C13.0563 16.75 16.75 13.0563 16.75 8.5H15.25ZM8.5 15.25C4.77208 15.25 1.75 12.2279 1.75 8.5H0.25C0.25 13.0563 3.94365 16.75 8.5 16.75V15.25ZM1.75 8.5C1.75 4.77208 4.77208 1.75 8.5 1.75V0.25C3.94365 0.25 0.25 3.94365 0.25 8.5H1.75ZM8.5 1.75C12.2279 1.75 15.25 4.77208 15.25 8.5H16.75C16.75 3.94365 13.0563 0.25 8.5 0.25V1.75ZM18.5303 17.4697L14.3428 13.2821L13.2821 14.3428L17.4697 18.5303L18.5303 17.4697Z"
                    fill="#7B61FF" />
             </svg>
            <Input type='text'
                placeholder='Search by keywords' />
        </Wrap>
    )
}
export default HeaderSearch;