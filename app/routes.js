const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

//routing for activities screen
router.post('/select-activities-router', function(req, res, next){

const selectActivity = req.session.data['daily-activity']

  if (selectActivity == 'prep-food') {
    res.redirect('/sprint-1/preparing-food/choose-method')
  } 
  if (selectActivity == 'dressing') {
    res.redirect('/sprint-1/dressing/choose-method')
  } 
  if (selectActivity == 'moving-around') {
    res.redirect('/sprint-1/moving-around/choose-method')
  } 
  
  else {
    res.redirect('/sprint-1/preparing-food/choose-method')
  }
})

//routing for choose method prep food screen
router.post('/choose-method-router', function(req, res, next){

    const chooseMethod = req.session.data['choose-method-preparing-food']
    
      if (chooseMethod == 'nhs') {
        res.redirect('/sprint-1/ask-nhs/preparing-food')
      } 
      if (chooseMethod == 'someone-i-know') {
        res.redirect('/sprint-1/vouch-for-me/preparing-food')
      } 
      if (chooseMethod == 'diary') {
        res.redirect('/sprint-1/preparing-food/diary/good/problems-prep-food')
      } 
      
      else {
        res.redirect('/sprint-1/preparing-food/choose-method')
      }
    })

  //routing for choose method dressing screen
router.post('/choose-method-dressing-router', function(req, res, next){

  const chooseMethod = req.session.data['choose-method-dressing']
  
    if (chooseMethod == 'nhs') {
      res.redirect('/sprint-1/ask-nhs/dressing')
    } 
    if (chooseMethod == 'someone-i-know') {
      res.redirect('/sprint-1/vouch-for-me/dressing')
    } 
    if (chooseMethod == 'diary') {
      res.redirect('/sprint-1/dressing/diary/good/problems-dressing')
    } 
    
    else {
      res.redirect('/sprint-1/dressing/choose-method')
    }
  })

  //routing for choose method moving around screen
  router.post('/choose-method-moving-around-router', function(req, res, next){

    const chooseMethod = req.session.data['choose-method-moving-around']
    
      if (chooseMethod == 'nhs') {
        res.redirect('/sprint-1/ask-nhs/moving-around')
      } 
      if (chooseMethod == 'someone-i-know') {
        res.redirect('/sprint-1/vouch-for-me/moving-around')
      } 
      if (chooseMethod == 'diary') {
        res.redirect('/sprint-1/moving-around/diary/good/problems-moving-around')
      } 
      
      else {
        res.redirect('/sprint-1/moving-around/choose-method')
      }
    })

//routing for how to contact screen
router.post('/how-contact-router', function(req, res, next){

    const howContact = req.session.data['how-contact']
    
      if (howContact == 'email') {
        res.redirect('/sprint-1/vouch-for-me/email')
      } 
      if (howContact == 'phone') {
        res.redirect('/sprint-1/vouch-for-me/phone')
      } 
      if (howContact == 'text') {
        res.redirect('/sprint-1/vouch-for-me/mobile')
      } 
      if (howContact == 'letter') {
        res.redirect('/sprint-1/vouch-for-me/address')
      } 
      
      else {
        res.redirect('/sprint-1/vouch-for-me/email')
      }
    })

//DIARY ROUTES

//GOOD DAY

//GOOD DAY PREP FOOD

//routing for food prep problems on a good day screen
router.post('/good-problems-prep-food-router', function(req, res, next){

    const problemsFoodGood = req.session.data['problems-food']
    
      if (problemsFoodGood == 'good-pain') {
        res.redirect('/sprint-1/preparing-food/diary/good/pain-preparing-food')
      } 
      if (problemsFoodGood == 'tired') {
        res.redirect('/sprint-1/preparing-food/diary/good/pain-preparing-food')
      } 
      if (problemsFoodGood == 'good-hurt') {
        res.redirect('/sprint-1/preparing-food/diary/good/hurt-preparing-food')
      } 

      if (problemsFoodGood == 'good-supervision') {
        res.redirect('/sprint-1/preparing-food/diary/good/supervision-preparing-food')
      } 
      if (problemsFoodGood == 'good-help') {
        res.redirect('/sprint-1/preparing-food/diary/good/supervision-preparing-food')
      } 

      if (problemsFoodGood == 'good-reminder') {
        res.redirect('/sprint-1/preparing-food/diary/good/reminder-preparing-food')
      } 
      if (problemsFoodGood == 'good-unable') {
        res.redirect('/sprint-1/preparing-food/diary/good/unable-preparing-food')
      } 
      
      else {
        res.redirect('/sprint-1/preparing-food/diary/good/pain-preparing-food')
      }
    })

//GOOD DAY DRESS AND UNDRESS

//routing for dressing problems on a good day screen
router.post('/good-problems-dressing-router', function(req, res, next){

  const problemsDressingGood = req.session.data['problems-dressing']
  
    if (problemsDressingGood == 'good-pain') {
      res.redirect('/sprint-1/dressing/diary/good/pain-dressing')
    } 
    if (problemsDressingGood == 'good-tired') {
      res.redirect('/sprint-1/dressing/diary/good/pain-dressing')
    } 
    if (problemsDressingGood == 'good-hurt') {
      res.redirect('/sprint-1/dressing/diary/good/hurt-dressing')
    } 

    if (problemsDressingGood == 'good-supervision') {
      res.redirect('/sprint-1/dressing/diary/good/supervision-dressing')
    } 
    if (problemsDressingGood == 'good-help') {
      res.redirect('/sprint-1/dressing/diary/good/supervision-dressing')
    } 

    if (problemsDressingGood == 'good-reminder') {
      res.redirect('/sprint-1/dressing/diary/good/reminder-dressing')
    } 
    if (problemsDressingGood == 'good-unable') {
      res.redirect('/sprint-1/dressing/diary/good/unable-dressing')
    } 
    
    else {
      res.redirect('/sprint-1/dressing/diary/good/pain-dressing')
    }
  })

//GOOD DAY MOVE AROUND

//routing for moving-around problems on a good day screen
router.post('/good-problems-moving-around-router', function(req, res, next){

  const problemsMovingAroundGood = req.session.data['problems-moving-around']
  
    if (problemsMovingAroundGood == 'good-pain') {
      res.redirect('/sprint-1/moving-around/diary/good/pain-moving-around')
    } 
    if (problemsMovingAroundGood == 'good-tired') {
      res.redirect('/sprint-1/moving-around/diary/good/pain-moving-around')
    } 
    if (problemsMovingAroundGood == 'good-hurt') {
      res.redirect('/sprint-1/moving-around/diary/good/hurt-moving-around')
    } 

    if (problemsMovingAroundGood == 'good-supervision') {
      res.redirect('/sprint-1/moving-around/diary/good/supervision-moving-around')
    } 
    if (problemsMovingAroundGood == 'good-help') {
      res.redirect('/sprint-1/moving-around/diary/good/supervision-moving-around')
    } 

    if (problemsMovingAroundGood == 'good-reminder') {
      res.redirect('/sprint-1/moving-around/diary/good/reminder-moving-around')
    } 
    if (problemsMovingAroundGood == 'good-unable') {
      res.redirect('/sprint-1/moving-around/diary/good/unable-moving-around')
    } 
    
    else {
      res.redirect('/sprint-1/moving-around/diary/good/pain-moving-around')
    }
  })

//BAD DAY

//BAD DAY PREP FOOD

//routing for food prep problems on a bad day screen
router.post('/bad-problems-prep-food-router', function(req, res, next){

    const problemsFoodBad = req.session.data['problems-food']
    
      if (problemsFoodBad == 'bad-pain') {
        res.redirect('/sprint-1/preparing-food/diary/bad/pain-preparing-food')
      } 
      if (problemsFoodBad == 'bad-tired') {
        res.redirect('/sprint-1/preparing-food/diary/bad/pain-preparing-food')
      } 
      if (problemsFoodBad == 'bad-hurt') {
        res.redirect('/sprint-1/preparing-food/diary/bad/hurt-preparing-food')
      } 

      if (problemsFoodBad == 'bad-supervision') {
        res.redirect('/sprint-1/preparing-food/diary/bad/supervision-preparing-food')
      } 
      if (problemsFoodBad == 'bad-help') {
        res.redirect('/sprint-1/preparing-food/diary/bad/supervision-preparing-food')
      } 

      if (problemsFoodBad == 'bad-reminder') {
        res.redirect('/sprint-1/preparing-food/diary/bad/reminder-preparing-food')
      } 
      if (problemsFoodBad == 'bad-unable') {
        res.redirect('/sprint-1/preparing-food/diary/bad/unable-preparing-food')
      } 
      
      else {
        res.redirect('/sprint-1/preparing-food/diary/bad/pain-preparing-food')
      }
    })

//BAD DAY DRESSING

//routing for dressing problems on a bad day screen
router.post('/bad-problems-dressing-router', function(req, res, next){

  const problemsDressingBad = req.session.data['problems-dressing']
  
    if (problemsDressingBad == 'bad-pain') {
      res.redirect('/sprint-1/dressing/diary/bad/pain-dressing')
    } 

    if (problemsDressingBad == 'bad-tired') {
      res.redirect('/sprint-1/dressing/diary/bad/pain-dressing')
    } 
    if (problemsDressingBad == 'bad-hurt') {
      res.redirect('/sprint-1/dressing/diary/bad/hurt-dressing')
    } 

    if (problemsDressingBad == 'bad-supervision') {
      res.redirect('/sprint-1/dressing/diary/bad/supervision-dressing')
    } 
    if (problemsDressingBad == 'bad-help') {
      res.redirect('/sprint-1/dressing/diary/bad/supervision-dressing')
    } 

    if (problemsDressingBad == 'bad-reminder') {
      res.redirect('/sprint-1/dressing/diary/bad/reminder-dressing')
    } 
    if (problemsDressingBad == 'bad-unable') {
      res.redirect('/sprint-1/dressing/diary/bad/unable-dressing')
    } 
    
    else {
      res.redirect('/sprint-1/dressing/diary/bad/pain-dressing')
    }
  })

//BAD DAY MOVING AROUND

//routing for moving around problems on a bad day screen
router.post('/bad-problems-moving-around-router', function(req, res, next){

  const problemsMovingBad = req.session.data['problems-moving-around']
  
    if (problemsMovingBad == 'bad-pain') {
      res.redirect('/sprint-1/moving-around/diary/bad/pain-moving-around')
    } 
    if (problemsMovingBad == 'bad-tired') {
      res.redirect('/sprint-1/moving-around/diary/bad/pain-moving-around')
    } 
    if (problemsMovingBad == 'bad-hurt') {
      res.redirect('/sprint-1/moving-around/diary/bad/hurt-moving-around')
    }

    if (problemsMovingBad == 'bad-supervision') {
      res.redirect('/sprint-1/moving-around/diary/bad/supervision-moving-around')
    } 
    if (problemsMovingBad == 'bad-help') {
      res.redirect('/sprint-1/moving-around/diary/bad/supervision-moving-around')
    } 

    if (problemsMovingBad == 'bad-reminder') {
      res.redirect('/sprint-1/moving-around/diary/bad/reminder-moving-around')
    } 
    if (problemsMovingBad == 'bad-unable') {
      res.redirect('/sprint-1/moving-around/diary/bad/unable-moving-around')
    } 
    
    else {
      res.redirect('/sprint-1/moving-around/diary/bad/pain-moving-around')
    }
  })


module.exports = router
