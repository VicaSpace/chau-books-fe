import { BookOutlined, HomeOutlined } from '@ant-design/icons';
import { SearchIcon } from '@chakra-ui/icons';
import { Center, Grid, GridItem, IconButton } from '@chakra-ui/react';
import BookmarkPage from '../bookmarkPage/bookmarkPage';
import HomePage from '../homePage/homePage';

function placeHolder() {
  return (
    <Grid
      templateAreas={`"content content content"
                  "home-button search-button bookmark-button"`}
      gridTemplateRows={'1fr 84px'}
      h="812px"
      w="375px"
      border={'2px'}
      gap={0}
    >
      <GridItem overflow="auto" border="1px" bg="#FFFFFF" area={'content'}>
        <HomePage />
        {/* <BookmarkPage /> */}
      </GridItem>
      <GridItem bg="#FFFFFF" area={'home-button'}>
        <Center>
          <IconButton
            bg="#FFFFFF"
            aria-label="Home"
            size="lg"
            icon={<HomeOutlined />}
          />
        </Center>
      </GridItem>
      <GridItem bg="#FFFFFF" area={'search-button'}>
        <Center>
          <IconButton
            bg="#FFFFFF"
            aria-label="Search"
            size="lg"
            icon={<SearchIcon />}
          />
        </Center>
      </GridItem>
      <GridItem bg="#FFFFFF" area={'bookmark-button'}>
        <Center>
          <IconButton
            bg="#FFFFFF"
            aria-label="Bookmark"
            size="lg"
            icon={<BookOutlined />}
          />
        </Center>
      </GridItem>
    </Grid>
  );
}

export default placeHolder;
